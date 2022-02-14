import React, { Component } from 'react'
import AdminService from '../services/AdminService';

export default class ListAdminComponents extends Component {
    constructor(props){
        super(props);
        this.state={
            registration:[]
        }
        this.addUser = this.addUser.bind(this);
        this.editRegistration = this.editRegistration.bind(this);
        this.deleteRegistration = this.deleteRegistration.bind(this);
        this.login = this.login.bind(this);
    }

    deleteRegistration(userId){
        AdminService.deleteRegistration(userId).then( (response) => {
            this.setState({registration: this.state.registration.filter(register => register.userId !== userId)});
        });
    }

    //viewRegistration(userId){
     //   this.props.history.push(`/view-user/${userId}`);}  

    editRegistration(userId){
        this.props.history.push(`/update-user/${userId}`);
    }

    componentDidMount(){
        AdminService.getRegistration().then((response) => {
            this.setState({ registration : response.data});
        });
    }

    addUser(){
        this.props.history.push('/add-user');
    }

    login(){
        this.props.history.push('/login-form');
    }

  render() {
    return (
      <div>
          <h2 className="text-center" style={{fontFamily : 'sans-serif'}}>Users List</h2>
                <button className="btn btn-lg btn-primary" onClick={this.addUser}> Sign Up </button>
                <button style = {{marginLeft: "1099px"}} className="btn btn-lg btn-success" onClick = {this.login}>Log In</button>
          <div className="row">
          </div><br/>
          <div className="row">
              <table className="table table-striped table-bordered">
                  <thead>
                      <tr>
                          <th>User Id</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Email Id</th>
                          <th>Contact Number</th>
                          <th>Password</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          this.state.registration.map(
                              register =>
                              <tr key = {register.userId}>
                                  <td> {register.userId} </td>
                                  <td> {register.firstname} </td>
                                  <td> {register.lastname} </td>
                                  <td> {register.email} </td>
                                  <td> {register.contactno} </td>
                                  <td> {register.password} </td>
                                  <td>
                                      <button onClick = { () => this.editRegistration(register.userId)} className = "btn btn-info">Update</button>
                                      <button style = {{marginLeft: "10px"}} onClick = { () => this.deleteRegistration(register.userId)} className = "btn btn-danger">Delete</button>
                                    {/*  <button style = {{marginLeft: "10px"}} onClick = { () => this.viewRegistration(register.userId)} className = "btn btn-info">View</button> */}
                                  </td>
                              </tr>
                          )
                      }
                  </tbody>
              </table>
          </div>
      </div>
    )
  }
}
