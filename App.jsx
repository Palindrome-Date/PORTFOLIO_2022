import React, { useState} from 'react'
import Table from './Table'

export default function App() {
    const [data, setdata] = useState([
        {id: 1, name: "Terminator", type: "Action", stock: 6, rate: 2.5},
        {id: 2, name: "Die Hard",  type: "Action", stock: 5, rate: 2.5},
        {id: 3, name: "Get Out", type: "Thriller", stock: 8, rate: 3.5},
        {id: 4, name: "Trip to Italy", type: "Comedy", stock: 7, rate: 3.5},
        {id: 5, name: "Airplane", type: "Comedy", stock: 7, rate: 3.5},
      ])
    const [value, setvalue] = useState(5)
    const minusOne = () => {
        setvalue(value - 1)
    }
    const handleDelete = (id) => {
        const filter = data.filter(elem => elem.id !== id)
        setdata(filter)
    }


  return (
    <div>
        <Table data={data} value={value} handleDelete={handleDelete} minusOne={minusOne} />
    </div>
  )
}
