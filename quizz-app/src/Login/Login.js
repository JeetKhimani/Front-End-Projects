import React from 'react';
import './Login.scss';
import {NavLink} from 'react-router-dom';
import { instance } from './../utilities/AxiosConfig';
import facebook from'../Assets/facebook.png';
import instagram from'../Assets/instagram.png';
import twitter from'../Assets/twitter.png';
import { withRouter } from 'react-router-dom';

export class Login extends React.Component{

    constructor(props){
        super(props);
        this.props = props;
    }

    onSubmit = event => {
        console.log(instance);
        event.preventDefault()
        var pr = instance.post('/login', {
            email: this.email.value,
            password: this.password.value
        });
        pr.then((response) => {

            console.log(response.data);
            const token = response.data.token;
            localStorage.setItem('jwtToken',token)

                      console.log(response.data.Status);
                      if (response.data.Status === "Success") {
                          console.log(response.data)
                         alert("successful Logged in");
                          this.props.history.push("/QuizList");
                      } else if (response.data.Status === "Failed") {
                          alert("username or Email Id Already exist");
                      }
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
                        <NavLink to='/SignUp'><button>Sign Up</button></NavLink>
                    </span>
                </nav>
                <br /><br /><br /><br/><br/><br/><br/>
                <div class='login-box'>
                    <h1>Login</h1>
                    <form class='form' onSubmit={this.onSubmit} ref={form => this.form = form}  >
                        <div class='login-table-div'>
                            <table class='login-table'>
                                <td>
                                    <tr><label>Email:</label></tr>
                                    <tr><label>Password:</label></tr>
                                </td>
                                <td>
                                    <tr><input type='text' ref={input => this.email = input}></input></tr>
                                    <tr><input type='password' ref={input => this.password = input}></input></tr>
                                    <tr><button type='login-submit-btn' id='new'>Login</button></tr>
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
    
export default withRouter(Login);


/*
import { instance } from './../utilities/AxiosConfig';
import React from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';
import {NavLink} from 'react-router-dom';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
    }

    onSubmit = event => {
        console.log(instance);
        event.preventDefault()
        var pr = instance.post('/login', {
            username: this.username.value,
            password: this.password.value
        });
        pr.then((response) => {

            console.log(response.data);
            const token = response.data.token;
            localStorage.setItem('jwtToken',token)

                      console.log(response.data.Status);
                      if (response.data.Status === "Success") {
                          console.log(response.data)
                        //   alert("successful Logged in");
                          this.props.history.push("/");
                      } else if (response.data.Status === "Failed") {
                          alert("username or Email Id Already exist");
                      }
                  })
    }


    render (){



    return (
        <div>
        <div className="login-feature">
            <div className="container-login">
                <form
                         onSubmit={this.onSubmit}
                        ref={form => this.form = form} className="login-form">


                    <h3 className="title-styling">Log In Page</h3>
                    <label>Username:</label>
                    <input id="username" ref={input => this.username = input}  className="form-control" type="text" required /><br></br>

                    <label>Password:  </label>

                    <input id="password" ref={input => this.password = input}
                        className="form-control" type="text" required /><br></br>
                        
                        <button type='submit' className='btn' >Log In</button>
                </form>
            </div>
        </div>
        </div>
        );
    }
}

export default withRouter(Login);

*/