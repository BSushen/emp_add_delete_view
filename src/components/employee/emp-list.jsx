import React, { Component } from 'react'
import { EmpDetails } from './emp-details';
import { EmpForm } from './emp-form';

export default class EmpList extends Component {
    
  constructor(props) {
    super(props);
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.state = {
      employees: [
        {
          srNo: 1,
          name: 'LP Shivan',
          createdOn: date
          
        },
        {
          srNo: 2,
          name: 'Ravikumar',
          createdOn: date
        },
        {
          srNo: 3,
          name: 'Nanda',
          createdOn: date
        }
      ],
      latestId: 4,
      selectedEmployee: null
    };
 
  }
  
  showDetails = (selectedEmployee) => {
    console.log(selectedEmployee);
    this.setState({
      selectedEmployee: selectedEmployee
    })
  }

  DeleteRecord=(deleteEmp)=>{
    console.log(deleteEmp);
    this.setState({
      selectedEmployee : this.state.selectedEmployee.filter(i => i.srNo !== deleteEmp.srNo)
      
    })
    
  }

  addEmployee = (empObj) => {

    //newEmployee.id = this.state.latestId;
    let newEmployee = Object.assign({}, empObj, {id: this.state.latestId});
    
    let newList = [...this.state.employees, newEmployee];
    this.setState({
      employees: newList,
      latestId: this.state.latestId + 1
    });
  }

  render() {
    const title = <h3> List of Employees </h3>;
    const empRows = this.state.employees.map(e => {
                              return (
                                <tr key={e.srNo}>
                                  <td>{e.srNo}</td>
                                  <td>{e.name}</td>
                                  <td>{e.createdOn}</td> 
                                  <td>
                                    <button className="ui basic blue button"
                                            onClick={() => this.showDetails(e)}>
                                      Show Details
                                    </button>
                                    <button className="ui basic red button"
                                            onClick={() => this.DeleteRecord(e)}>
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              )
                            });

    return (
      <div>
        {title}
        <table className="ui blue table striped">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Name</th> 
              <th>Created On</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {empRows}
          </tbody>
        </table>
        <div className="ui divided two column grid">
          <div className="row">
            <div className="column">
              <EmpForm addEmployee={this.addEmployee}/>
            </div>
            <div className="column">
            {
              this.state.selectedEmployee && 
              <EmpDetails employee={this.state.selectedEmployee} />
            }
            </div>
          </div>
        </div> 
      </div>
    )
  }
}
