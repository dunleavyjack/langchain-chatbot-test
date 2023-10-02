import React, { useState, ChangeEvent } from 'react';
import { useLLM } from './services/llm/hooks/useLLM';

export const App = (): JSX.Element => {
    const [input, setInput] = useState<string>('');

    const { response, submitPrompt } = useLLM();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmitText = () => {
        submitPrompt(input);
        setInput('');
    };

    return (
        <main>
            <div className="prompt-input">
                <input value={input} onChange={handleInputChange} />
                <button onClick={handleSubmitText}>Enter</button>
            </div>
            <div className="llm-response">
                <p>{response ? response : 'no response'}</p>
            </div>
        </main>
    );
};
