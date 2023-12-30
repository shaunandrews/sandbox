// src/routes/api/get-food-pun.js
export async function get(request) {
	// Ideally, you'd use the OpenAI SDK, but for a simple request, a fetch will do.
	const response = await fetch("https://api.openai.com/v1/engines/davinci/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // Set your API key in .env
		},
		body: JSON.stringify({
			prompt: "Tell me a food pun:",
			max_tokens: 60,
		}),
	});

	const data = await response.json();

	return {
		status: 200,
		body: {
			pun: data.choices[0].text.trim(),
		},
	};
}
