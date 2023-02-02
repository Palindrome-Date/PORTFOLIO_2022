import React, { useState, useEffect} from "react";


import "./App.css"


export default function App1() {
const [data, setData] = useState([])
useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/?_limit=5")
    .then(response => response.json())
    .then(data => setData(data) )
}, [])
const handleDelete = () => {
    const f = data.filter(todo => todo.id === 4)
    setData(f)
}




  return (
    <div>
        {
            data.length
            ? <pre>{JSON.stringify(data, null, 1)}</pre>
            : <h1>xxxxxxxxxxxxxxxxxxxxxx</h1>
        }
        <button onClick={handleDelete}>delete</button>
    </div>
  )
}

