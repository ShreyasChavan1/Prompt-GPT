import run from "../config/gemini"
export default async function handler(req,res){

    if(req.method !== "POST"){
        return res.status(405).json({error : "use post"});
    }
    

    const {prompt} = req.body
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
    res.status(200).json({response});

}