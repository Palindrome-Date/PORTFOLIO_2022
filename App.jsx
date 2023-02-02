import React, { useState } from 'react'
import Language from './Language'



export default function App() {
const [arr, setArr] = useState(["html", "css", "JavaScript", "React.js", "Node.js","Python"])
const handelDelete = (language) => {
  const f = arr.filter(elem => elem !== language)
  setArr(f)
}

  return (
    <div>
        <Language list={arr} handelDelete={handelDelete}/>
    </div>
  )
}
