import {useRef} from 'react';

export const Input = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <input type="text" ref={inputRef}/>
    )
}
