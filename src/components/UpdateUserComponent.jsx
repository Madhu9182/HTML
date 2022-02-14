import React, { Component } from 'react'
import AdminService from '../services/AdminService';

export default class UpdateUserComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            userId: this.props.match.params.userId,
            firstname:'',
            lastname:'',
            email:'',
            contactno:'',
            password:''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeContactNumberHandler = this.changeContactNumberHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.updateRegistration = this.updateRegistration.bind(this);
    }

    
    componentDidMount(){
        AdminService.getRegistrationById(this.state.userId).then( (response) => {
            let register = response.data;
            this.setState({firstname : register.firstname, 
                            lastname : register.lastname, 
                            email : register.email,
                            contactno : register.contactno, 
                            password : register.password 
                        });
        });
    }

    updateRegistration = (e) => {
        e.preventDefault();
        let register = {firstname : this.state.firstname, 
                        lastname : this.state.lastname,
                        email : this.state.email,
                        contactno : this.state.contactno,
                        password : this.state.password
                    };
        console.log('register => ' + JSON.stringify(register));
        AdminService.updateRegistration(register, this.state.userId).then( response => {
            this.props.history.push('/registration');
        });
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstname : event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastname : event.target.value})
    }

    changeEmailIdHandler = (event) => {
        this.setState({email : event.target.value})
    }

    changeContactNumberHandler = (event) => {
        this.setState({contactno : event.target.value})
    }

    changePasswordHandler = (event) => {
        this.setState({password : event.target.value})
    }

    cancel(){
        this.props.history.push('/users');
    }

  render() {
    return (
        <div className="padding container d-flex justify-content-center">
            <div className="col-md-10 col-md-offset-1">
                <form className="signup-form">
                <h2 className="text-center">Update Form</h2>
                <hr />
                    <div className="form-group">
                        <input type="text" maxLength={25} className="form-control" placeholder="First Name" 
                        value={this.state.firstname} onChange={this.changeFirstNameHandler} required="" /> 
                    </div>
                    <br/>

                    <div className="form-group">
                        <input type="text" maxLength={15} className="form-control" placeholder="Last Name" 
                        value={this.state.lastname} onChange={this.changeLastNameHandler} required="required" /> 
                    </div>
                    <br/>

                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email Id" 
                        value={this.state.email} onChange={this.changeEmailIdHandler} required="required" /> 
                    </div>
                    <br/>

                    {/*<div class="form-group"> 
                        <input type="text" class="form-control" placeholder="Dabba Id" required="required"> </div> */}
                    <div className="form-group"> 
                    {/*<input type="password" class="form-control" placeholder="xxxxxx" required="required"> </div> */}
                        <input type="password" className="form-controll" placeholder="Password" value={this.state.password} onChange={this.changePasswordHandler} name="password" autoComplete="current-password" required id="id_password" />
                        <i className="far fa-eye" id="togglePassword" style={{marginLeft: '-30px', cursor: 'pointer'}} />
                    <br/>

                    <div className="form-group"> 
                        <input type="number" maxLength={10} className="form-control" placeholder="Contact Number" 
                        value={this.state.contactno} onChange={this.changeContactNumberHandler} required="required" /> </div>
                    <br/>

                    <div className="form-group text-center"> 
                        <button type="submit" className="btn btn-success" onClick={this.updateRegistration}>Save</button> </div>
                    </div>
            </form>
        </div>
    </div>
    )
  }
}
