import React from 'react'
import PropTypes from 'prop-types'

export default function Todos({ task, deleteTask, value, minusOne, handleSubmit, plusOne}) {
  return (
    <div className='Main'>
        <h1 className='Main__Title'>You have {value} Todos</h1>
        <table className='Main__Table'>
        {
           task.map((elem,index)=> {
            return (
                <tr key={index}>
                <td>{elem.name}</td>
                <td>
                    <button className='Main__Button' onClick={() => {deleteTask(elem.id); minusOne()}}>x</button>
                </td>
            </tr>
            )
           }) 
        }
        </table>
        <form className='Main__Form' onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Item'/>
            <input type="submit" value="Submit" onClick={() => plusOne()} />
        </form>
    </div>
  )
}
Todos.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  minusOne: PropTypes.func.isRequired,
  plusOne: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  task: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
  value: PropTypes.number.isRequired,
}
