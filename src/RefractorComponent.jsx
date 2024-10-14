import { useState } from "react";

export default function RefractorComponent({ children }) {
    const [x, setX] = useState(0);
    return (
        <div>
            <button onClick={() => setX(x + 1)}>Increment {x}</button>
            {/* This Children component will not re-render when the parent component re-renders 
            because children object is created outside the parent component so 
            whenever we are returning the children prop it's returning the same object so 
            no re-render */}
            {children}
        </div>
    )
}