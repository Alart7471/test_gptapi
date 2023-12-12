import { OpenAI } from "openai";
const key = '******************************'
const openai = new OpenAI({ apiKey: key });


export async function main(msg) {
    try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: msg }],
        model: "gpt-3.5-turbo",
      });
    } catch (error) {
      console.log(error)
      return 0
    }

      return completion.choices[0].message.content
}
