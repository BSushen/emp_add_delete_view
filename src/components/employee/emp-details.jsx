import React from 'react'

export function EmpDetails(props) {

  return (
    <div className="ui card">
      <div className="content">
        <div className="header">
          Employee Details with id : {props.employee.srNo}
        </div>
        <div className="description">
          <p><strong>Sr No: </strong> {props.employee.srNo}</p>
          <p><strong>Name: </strong> {props.employee.name}</p>
          <p><strong>Created On: </strong> {props.employee.createdOn}</p>
        </div>
      </div>
      
    </div>
  )
}