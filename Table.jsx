import React from 'react'
import PropTypes from 'prop-types'

import table from './Table.module.css'

export default function Table({ data, value, handleDelete, minusOne}) {
  return (
    <div>
      <h3 className={table.title}>Showing {value} movies in the database.</h3>
      <table className={table.main_table}>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th>X</th>
        </tr>
        {data.map(elem => {
          return (
            <tr>
              <td>{elem.name}</td>
              <td>{elem.type}</td>
              <td>{elem.stock}</td>
              <td>{elem.rate}</td>
              <td>
                <button className={table.delete_btn} onClick={() => {handleDelete(elem.id); minusOne()}}>Delete</button>
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
Table.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  minusOne: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    stock: PropTypes.number,
    rate: PropTypes.number,
  value: PropTypes.number,  
  }))
}
