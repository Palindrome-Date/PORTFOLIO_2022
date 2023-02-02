import React, { useState } from 'react'
import Todos from './Todos'

import "./sass/App.scss"

export default function App() {
const [task, settask] = useState([
        {id: "1", name: "task 1"},
        {id: "2", name: "task 2"},
        {id: "3", name: "task 3"}, 
])


const handleSubmit = (e) => {
    e.preventDefault()

    const newTask = {
        id: Date.now().toString(),
        name: e.target.elements[0].value,
    }
    task.length > 0 
    ? settask([...task, newTask]) 
    : settask([newTask])
    e.target.reset()
}

const deleteTask = (id) => {
   const f = task.filter(elem => elem.id !== id)
    settask(f)
}

const [value, setvalue] = useState(3)

const minusOne = () => {
    setvalue(value - 1)
}
const plusOne = () => {
    setvalue(value + 1)
}

  return (
    <div>
        <Todos 
           task={task} 
           deleteTask={deleteTask} 
           value={value} 
           minusOne={minusOne} 
           handleSubmit={handleSubmit} 
           plusOne={plusOne} />
    </div>
  )
}
