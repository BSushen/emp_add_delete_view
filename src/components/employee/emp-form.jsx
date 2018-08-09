import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class EmpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
        srNo: '',
        name: '',
      createdOn: ''
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  resetForm = () => {
    this.setState({
        srNo: '',
        name: '',
      createdOn: ''
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state);
    this.props.addEmployee(this.state);
    this.resetForm();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="field">
          <label>Sr No</label>
          <input type="text"
                  name="srNo" 
                  value={this.state.srNo}
                  onChange={this.handleChange} />
        </div>
        <div className="field">
          <label>Name</label>
          <input type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange} />
        </div>
        <div className="field">
          <label>Created Date</label>
          <input type="text"
                  name="createdOn"
                  value={this.state.createdOn}
                  onChange={this.handleChange} />
        </div>
       
        <button className="ui blue basic button">
          Add Employee
          </button>
      </form>
    )
  }
}

EmpForm.propTypes = {
  addEmployee: PropTypes.func.isRequired
}
