import { OpenAI } from "openai";
const key = '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'
const openai = new OpenAI({ apiKey: key });


export async function main(msg) {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: msg }],
        model: "gpt-3.5-turbo",
      });

      return completion.choices[0].message.content
}