import React from 'react'

const Listitem = () => {
  return (
    <li className='list-group-item rounded-0'>
        Test
        <button className="btn btn-danger btn-sm rounded-0 float-end">Delete</button>
        <button className="btn btn-warning btn-sm rounded-0 float-end">Update</button>
    </li>
  )
}

export default Listitem