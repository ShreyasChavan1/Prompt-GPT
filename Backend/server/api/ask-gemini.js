import run from "../config/gemini"
export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader(
  'Access-Control-Allow-Origin',
  req.headers.origin
);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader("Access-Control-Allow-Credentials", "true");

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Use POST" });
    }

    const { prompt } = req.body;
    if (!prompt) {
        return res.status(400).json({ error: "No prompt provided" });
    }

    try {
        const response = await run(prompt);
        res.status(200).json({ response });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Gemini failed" });
    }
}
