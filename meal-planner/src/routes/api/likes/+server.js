// routes/api/likes/+server.js

export async function POST({ request }) {
	try {
		const { mealId, userId } = await request.json();

		const like = await prisma.like.create({
			data: {
				mealId: mealId,
				familyMemberId: userId,
			},
		});

		return new Response(JSON.stringify(like), {
			status: 201,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		console.error("Error adding like:", error);
		return new Response(JSON.stringify({ error: "Failed to add like" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
