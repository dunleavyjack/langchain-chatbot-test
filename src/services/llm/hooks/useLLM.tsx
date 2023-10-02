import { useState } from 'react';
import { llm } from '../utils/llmUtils';

export const useLLM = () => {
    const [response, setResponse] = useState<string>('');

    const submitPrompt = async (prompt: string) => {
        const llmResult = await llm.predict(prompt);
        setResponse(llmResult);
    };

    return { response, submitPrompt };
};
