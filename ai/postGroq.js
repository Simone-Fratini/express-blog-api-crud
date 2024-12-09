const groqSdkPath = "groq-sdk";

async function generateGroqResponse(userQuestion) {
    console.log("userQuestion: ", userQuestion);

    // Importa dinamicamente il modulo Groq
    const { default: Groq } = await import(groqSdkPath);

    // Configura l'istanza Groq con la chiave API
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

    try {
        // Prompt di sistema per l'AI
        const systemPrompt = `
            Sei un assistente. Quando ti chiedono un cibo, rispondi con un JSON contenente:
            - name: nome del cibo.
            - content: breve descrizione.
            - price: prezzo ipotetico.
            - tag: array di parole chiave.

            Se la richiesta non riguarda cibo, rispondi con: {
              "content": "undefined"
              }. Non aggiungere altro.
            Esempio:
            Utente: pizza margherita
            Risposta:
            {
              "name": "pizza margherita",
              "content": "Una pizza classica con pomodoro e mozzarella.",
              "price": 8.99,
              "tag": ["pizza", "italiano", "classico"]
            }
        `;

        // Richiesta all'API Groq
        const response = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: systemPrompt,
                },
                {
                    role: "user",
                    content: userQuestion,
                },
            ],
            model: "llama3-8b-8192",
        });

        const rawContent = response.choices[0]?.message?.content;
        console.log("Risposta sottoforma di raw dall'API Groq:", rawContent);

        // Parsing della risposta JSON
        try {
            const parsedResponse = JSON.parse(rawContent);
            return parsedResponse; // Restituisci l'oggetto trasformato in json
        } catch (parseError) {
            console.error("Errore nel parsing della risposta JSON:", parseError);
            throw new Error("La risposta dell'AI non è un JSON valido.");
        }
    } catch (error) {
        console.error("Errore nell'invocazione dell'API Groq:", error);
        throw new Error("Errore durante la comunicazione con l'API Groq.");
    }
}

module.exports = {
    generateGroqResponse,
};
