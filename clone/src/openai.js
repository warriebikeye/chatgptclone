const OpenAI = require ("openai");

const openai = new OpenAI({
    apiKey: "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",dangerouslyAllowBrowser: true // This is also the default, can be omitted
  });

export async function sendMsgToOpenAI(message){
    const res = await openai.completions.create({
        model:'text-davinci-003',
        prompt: message,
        max_tokens:256,

    });
    return res.choices[0].text;
}