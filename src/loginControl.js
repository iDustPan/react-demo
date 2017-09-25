/**
 * Created by xupan on 2017/9/25.
 */
import React from 'react'

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    );
}

export default class LoginControl extends React.Component {
    constructor(props) {
        super(props);

        this.state={isLoggedIn: false};
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogin(){
        this.setState({isLoggedIn: true});
    }

    handleLogout(){
        this.setState({
            isLoggedIn:false
        });
    }

    render() {
            let button = null;
            if (this.state.isLoggedIn) {
                button = <LogoutButton onClick={this.handleLogout}/>
            }else{
                button = <LoginButton onClick={this.handleLogin}/>
            }

        return(
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn}/>
                {button}
            </div>
        );
    }
}
