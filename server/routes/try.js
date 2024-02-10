const OpenAIApi = require('openai')
require("dotenv").config();
const openai = new OpenAIApi({
    apiKey: process.env.OPENAI_API_KEY
})


const messages = [];

async function main() {
    const userMessage = "Hello, how can I assist you?"; // User input message
    const completion = await openai.chat.completions.create({
        messages: [
            ...messages,
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: userMessage }, // User message
        ],
        model: "gpt-3.5-turbo",
    });

    const assistantResponse = completion.choices[0].message.content; // Assistant response

    messages.push({ role: "user", content: userMessage });
    messages.push({ role: "assistant", content: assistantResponse });

    console.log(assistantResponse);
}

  main();