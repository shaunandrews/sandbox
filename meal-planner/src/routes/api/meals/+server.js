/*
 * routes/api/meals/+server.js
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
	try {
		const meals = await prisma.meal.findMany({
			include: {
				likes: {
					include: {
						familyMember: true,
					},
				},
			},
		});
		return new Response(JSON.stringify(meals), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		// Handle the error appropriately, e.g., log it and return a server error response
		return new Response(JSON.stringify({ error: "Failed to fetch meals" }), {
			status: 500,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
}

export async function POST({ request }) {
	try {
		const data = await request.json();
		const newMeal = await prisma.meal.create({
			data: {
				description: data.description,
				date: new Date(), // Assuming `date` is a required field in your Prisma model
				likes: {
					create: [{ familyMemberId: data.currentUserId }],
				},
			},
			include: {
				likes: true, // Include likes in the response
			},
		});

		console.log("Prepping new meal", newMeal);

		return new Response(JSON.stringify(newMeal), {
			status: 201,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		// Handle the error appropriately, e.g., log it and return a server error response
		return new Response(JSON.stringify({ error: "Failed to create meal" }), {
			status: 500,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
}

export async function DELETE() {
	try {
		// Delete all likes associated with any meal
		await prisma.like.deleteMany({});

		// Now delete all meals
		await prisma.meal.deleteMany({});

		return new Response(null, { status: 204 });
	} catch (error) {
		console.error("Error deleting meals:", error); // Log the error
		return new Response(JSON.stringify({ error: "Failed to delete meals" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
