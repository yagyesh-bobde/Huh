const OpenAIApi = require("openai"); 
const express = require("express");
const fetchuser = require("../middleware/fetchuser")
const router = express.Router()

//* INIT OPENAI
const openai = new OpenAIApi({
    apiKey: process.env.OPENAI_API_KEY
})

let messages = [
    {
        role: "system",
        content: "Try to be a helpful friend and assist the user in learning language and imporove vocabulary."
    }
]
openai.api_key = process.env.OPENAI_API_KEY;


// POST endpoint for handling messages
router.post('/response', fetchuser, async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Text field is required' });
    }

    try {
        // Retrieve GPT response from memory if availabl
    // If response not found in memory, generate new response
    const completion = await openai.chat.completions.create({
        messages: [
            ...messages,
            { role: "user", content: text }, // User message
        ],
        model: "gpt-3.5-turbo",
        max_tokens: 25,
    });

        const assistantResponse = completion.choices[0].message.content;
        messages.push({ role: "user", content: text });
        messages.push({ role: "assistant", content: assistantResponse });
  

        return res.json({ response: assistantResponse });
    } catch (error) {
        console.error('Error generating response:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

  module.exports =  router;