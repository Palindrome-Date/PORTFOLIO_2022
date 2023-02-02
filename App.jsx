import React, { useState } from "react";

import './App.css'
function App() {
    const [value, setvalue] = useState(0)
    const plusOne = () => {
        setvalue(value + 1)
    }
    const reset = () => {
        setvalue(0)
    }
    const minusOne = () => {
        setvalue(value - 1)
    }
    return (
        <div key={Date.now()} className="App">
            <h1 className="value">{value}</h1>
            <div className="changeButtonsValues">
                <button className="btn" onClick={plusOne}>PlusOne</button>
                <button className="btn" onClick={reset}>Reset</button>
                <button className="btn" onClick={minusOne}>MinusOne</button>
            </div>
        </div>
    )
}
export default App

