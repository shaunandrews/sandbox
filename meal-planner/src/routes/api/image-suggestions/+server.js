/*
 * routes/api/image-suggestions/+server.js
 */

/*
 * I'm using the OpenAI node package.
 */
import OpenAI from "openai";
const openai = new OpenAI();

/*
 * This is some sample code from the OpenAI API docs. I think
 * it might be relevant to what we're I'm trying to do here with
 * the API endpoint.
 */

// async function main() {
// 	const image = await openai.images.generate({ prompt: "A cute baby sea otter" });

// 	console.log(image.data);
// }
// main();

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "system", content: "You are a helpful assistant." }],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices[0]);

export async function GET() {
	try {
		// return new Response("Hellow world", {
		// 	status: 200,
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// });
		const completion = await openai.chat.completions.create({
			messages: [{ role: "system", content: "You are a helpful assistant." }],
			model: "gpt-3.5-turbo",
        });
        
        console.log(completion.choices[0]);
	} catch (error) {
		// Handle the error appropriately, e.g., log it and return a server error response
		return new Response(JSON.stringify({ error: "Uh oh!" }), {
			status: 500,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
}
