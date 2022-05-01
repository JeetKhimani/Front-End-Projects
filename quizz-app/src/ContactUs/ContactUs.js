import React from 'react';
import './ContactUs.scss';
import {NavLink} from 'react-router-dom';
import facebook from'../Assets/facebook.png';
import instagram from'../Assets/instagram.png';
import twitter from'../Assets/twitter.png';
import linkedin from '../Assets/linkedin.png';
import { instance } from './../utilities/AxiosConfig';


export class ContactUs extends React.Component{

    constructor(props){
        super(props);
    }

    userObj = {};

    onSendClick(){
        var pr = instance.post('/email',{
            name: this.state.name,
            email: this.state.email,
            query: this.state.query
        });
        pr.then((response) =>{
            alert('Done');
            console.log(response.data);
        })
    }


    render(){
        return( 
            <div class='main'>
                            <nav>
                    <NavLink to='/'><a class='nav-link-logo'>LOGO</a></NavLink>
                    <span class='nav-span'>
                        <NavLink to='/AboutUs'><a class='nav-span-1'>About Us</a></NavLink>
                        <span class='nav-span-2'>Contact Us</span>
                        <NavLink to='/SignUp'><button>Sign Up</button></NavLink>
                        <NavLink to='/Login'><button>Login In</button></NavLink>
                    </span>
                </nav>
                <div class='body'>
                <div class="title">
                    <h1>Contact Us</h1>
                </div>
                <p class='contactus-p'>Fill out this form and we will reach out to you sooooon.</p>
                <div class='contactus-form'>
                    <form onSubmit={this.onSendClick} ref={form => this.form = form}>
                    <table class='contactus-table'>
                        <td>
                            <tr><label>Name:</label></tr>
                            <tr><label>EmailID:</label></tr>
                            <tr><label>Query:</label></tr>
                        </td>
                        <td>
                            <tr><input type='text' ref={input => this.name = input} required></input></tr>
                            <tr><input type='text' ref={input => this.email = input} required></input></tr>
                            <tr><input type='text' ref={input => this.query = input} required/></tr>
                            <tr><button type='submit'>Submit</button></tr>
                        </td>
                        
                    </table>
                    </form>
                </div>
                </div>
                <br/><br/><br/><br/><br/><br/><br/>
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
    
export default ContactUs;