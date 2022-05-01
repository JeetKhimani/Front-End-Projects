import React from 'react';
import './SignUp.scss';
import {NavLink} from 'react-router-dom';
import facebook from'../Assets/facebook.png';
import instagram from'../Assets/instagram.png';
import twitter from'../Assets/twitter.png';
import { instance } from './../utilities/AxiosConfig';


export class SignUp extends React.Component{

    constructor(props){
        super(props);
    }

    userObj = {};

    onSubmit = event => {
        // alert("On submit");
        console.log(instance);
        event.preventDefault()
        // this.setState({ sendingEmail: true })
        var pr = instance.post('/signup', {
            username: this.username.value,
            password: this.password.value,
            email: this.email.value
        });
        pr.then((response) => {
            alert('SignUp Successfull');
            this.props.history.push('/Login');
        })
    }

    render(){
        return(
            <div class='main'>
                <nav>
                    <NavLink to='/'><a class='nav-link-logo'>LOGO</a></NavLink>
                    <span class='nav-span'>
                        <span class='nav-span-1'>About Us</span>
                        <span class='nav-span-2'>Contact Us</span>
                        <NavLink to='/Login'><button>Login In</button></NavLink>
                    </span>
                </nav>
                <br /><br /><br /><br/><br/><br/><br/>
                <div class='signup-box'>
                    <h1>Sign Up</h1>
                    <form class='form' onSubmit={this.onSubmit} ref={form => this.form = form}>
                        <div class='signup-table-div'>
                            <table class='signup-table'>
                                <td>
                                    <tr><label>Username:</label></tr>
                                    <tr><label>Email:</label></tr>
                                    <tr><label>Password:</label></tr>
                                </td>
                                <td>
                                    <tr><input type='text' ref={input => this.username = input} required></input></tr>
                                    <tr><input type='email' ref={input => this.email = input} required></input></tr>
                                    <tr><input type='password' ref={input => this.password = input} required></input></tr>
                                    <tr><button class='signup-btn' type='submit' id='new'>SignUp</button></tr>
                                </td>
                            </table>
                            <br/><br/>
                        </div>
                    </form>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <footer class='footer'>
                    <div class='footer-address'>
                        <a href='#'>356 Huntington Avenue <br/>
                        Boston 02215 <br/>
                        Massachusetts.
                        </a><br />
                        <a href='#'>857-500-1279</a>
                    </div>
                    <div class='footer-socialmedia'>
                       <a> <img src={facebook} class='img-facebook'></img></a>
                       <a><img src={instagram} class='img-instagram'></img></a>
                       <a><img src={twitter} class='img-twitter'></img></a>
                    </div>
                </footer>
            </div>
            );
        }
    }
    
export default SignUp;