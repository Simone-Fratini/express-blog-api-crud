const { generateGroqResponse } = require("../ai/postGroq.js");

async function generatePost(req, res) {
    const userQuestion = req.body.content;

    if (!userQuestion) {
        return res.status(400).json({ error: "Il campo 'content' è obbligatorio." });
    }

    try {
        // Aspetta la risposta dalla funzione asincrona
        const aiPostResponse = await generateGroqResponse(userQuestion);
        console.log("Passaggio da generatePost");
        console.log("Risposta AI:", aiPostResponse);
        if(aiPostResponse.content === "undefined"){
            return res.status(404).json({ error: "l'AI non è riuscita a fornire una risposta corretta prova con un altra richiesta riguardante il cibo" });
        }

        // Invia la risposta al client
        res.json({ response: aiPostResponse });
    } catch (error) {
        console.error("Errore in generatePost:", error);
        res.status(500).json({ error: "Errore interno durante la generazione del post AI." });
    }
}

module.exports = { generatePost };
