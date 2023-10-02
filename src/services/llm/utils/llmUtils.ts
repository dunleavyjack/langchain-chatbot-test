import { OpenAI } from 'langchain/llms/openai';

const { REACT_APP_OPEN_AI_KEY: OPEN_AI_KEY } = process.env;

export const llm = new OpenAI({
    openAIApiKey: OPEN_AI_KEY,
});
