"use client"
import { useState, useEffect } from 'react';

function debounce(value:string, delay:number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const hendler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return() => {
            clearTimeout(hendler);
        };
    }, [value, delay]);

    return debouncedValue;
};

export default debounce;