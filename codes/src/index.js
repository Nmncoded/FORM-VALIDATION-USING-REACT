import React from 'react';
import stylesheets from './stylesheets/style.css'
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state =  {
            email: "",
            confirmPassword: "",
            password : "",
            username: "",
            errors: {
                email: "",
                username : "",
                confirmPassword: "",
                password : "",
            }
        }
    }
    validateEmail = (email) => {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    handleInput = ({target}) => {
        let {name, value} = target;
        let errors = this.state.errors;
        
        switch (name) {
            case "email": errors.email  = this.validateEmail(value) ? "" : "Email is not valid"
                break;
            case "confirmPassword": errors.confirmPassword  = (this.state.password === this.state.confirmPassword) ? "" : "Confirm Password must be same as Password"
                break;
            case "password": errors.password  = value.length > 5 ? "" : "length must be atleast five characters"
                break;
            case "username": errors.username  = value.length > 3 ? "" : "length must be atLeast three characters"
                break;

            default:
                break;
        }
        this.setState(() => {
            return {
                [name] : value,
            }
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.email+ this.state.password + this.state.username + this.state.confirmPassword)
    }

    render(){
        let {email,password,username,confirmPassword} = this.state.errors;
        let emailValue = this.state.email;
        let paswrdValue = this.state.password;
        let userValue = this.state.username;
        let confirmValue = this.state.confirmPassword;
        return (
            
            <form onSubmit={this.handleSubmit} >
                <h1>
                    Register With Us
                </h1>
                <label htmlFor='username' >
                    Username
                </label >
                <input type="text" className={ username ? "error" : "" } onChange={this.handleInput} id='username' name='username' value={this.state.username} placeholder="Username" />
                <span className={ username ? "err" : "" } >{ username ? username : "" }</span>
                <label htmlFor='email' >
                    Enter Your Email
                </label >
                <input type="email" className={ email ? "error" : "" } onChange={this.handleInput} id='email' name='email' value={this.state.email} placeholder="hello@example.com" />
                <span className={ email ? "err" : "" } >{ email ? email : "" }</span>
                <label htmlFor='password' >
                    Password
                </label >
                <input type="password" className={ password ? "error" : "" } id='password' onChange={this.handleInput} name='password' value={this.state.password} placeholder="password" />
                <span className={ password ? "err" : "" } >{ password ? password : "" }</span>
                <label htmlFor='confirm-password' >
                    Confirm Password
                </label >
                <input type="password" className={ confirmPassword ? "error" : "" } id='confirm-password' onChange={this.handleInput} name='confirmPassword' value={this.state.confirmPassword} placeholder="Confirm Password" />
                <span className={ confirmPassword ? "err" : "" } >{ confirmPassword ? confirmPassword : "" }</span>
                <input type="submit" className='btn' value="Submit" id={ !userValue || !emailValue || !paswrdValue || !confirmValue || email || password || username || confirmPassword ? "activ" : ""} />
            </form>
        )
    }
}

ReactDOM.render(<App /> , document.getElementById(`root`));