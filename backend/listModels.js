const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function listModels() {
    try {
        const response = await genAI.models.list();
        console.log(response);
    } catch (error) {
        console.error("Error listing models:", error);
    }
}

listModels();