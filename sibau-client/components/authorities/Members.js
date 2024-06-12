import React from 'react'
import { Table } from 'react-bootstrap'

function Members({ syndicateData }) {
  return (
    <>
      <Table striped bordered hover responsive >
        <thead>
          <tr>
            {/* <th>Image</th> */}
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {syndicateData.map((syndicate) => (
            <tr>
              {/* <td>
                  <div className=' h-20 w-20'>
                    <img className=' rounded-full h-full w-full' src={`${SERVER}/file-data-images/${syndicate.Image}`} alt={syndicate.Name} />
                  </div>
                </td> */}
              <td>
                {
                  syndicate.Name.map((name) => (
                    <p className=' font-bold text-lg'>{name}</p>
                  ))
                }
              </td>
              <td>
                <p className=' text-gray-500 font-bold tracking-wider'>{syndicate.Role}</p>
              </td>
              <td>{syndicate.Status}</td>
            </tr>
          ))}
        </tbody>
      </Table >
    </>
  )
}

export default Members