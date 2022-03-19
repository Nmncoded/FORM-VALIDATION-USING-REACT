import React from 'react';
import stylesheets from './stylesheets/style.css'
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state =  {
            email: "",
            password : "",
            errors: {
                email: "",
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

            case "password": errors.password  = value.length > 5 ? "" : "length must be greater than five characters"
                break;

            default:
                break;
        }
        this.setState({
            [name] : value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.email+ this.state.password)
    }

    render(){
        let {email,password} = this.state.errors;
        let emailValue = this.state.email;
        let paswrdValue = this.state.password;
        return (
            
            <form onSubmit={this.handleSubmit} >
                <h1>
                    User Log In
                </h1>
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
                <input type="submit" className='btn' value="Submit" id={!emailValue || !paswrdValue || email || password ? "activ" : ""} />
            </form>
        )
    }
}

ReactDOM.render(<App /> , document.getElementById(`root`));