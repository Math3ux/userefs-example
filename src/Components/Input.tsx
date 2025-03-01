import {useEffect, useRef} from 'react';

export const Input = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={() => inputRef.current?.focus()}>
                Focar no input
            </button>
        </div>
    )
}
