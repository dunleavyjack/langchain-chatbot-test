import React, { ChangeEvent, useState } from 'react';

export const TextInput = (): JSX.Element => {
    const [input, setInput] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmitText = () => {
        console.log(input);
        setInput('');
    };

    return (
        <div>
            <input value={input} onChange={handleInputChange} />
            <button onClick={handleSubmitText}>Enter</button>
        </div>
    );
};
