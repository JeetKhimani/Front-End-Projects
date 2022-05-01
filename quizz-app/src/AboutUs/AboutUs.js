import React from 'react';
import './AboutUs.scss';
import {NavLink} from 'react-router-dom';
import facebook from'../Assets/facebook.png';
import instagram from'../Assets/instagram.png';
import twitter from'../Assets/twitter.png';
import linkedin from '../Assets/linkedin.png';


export class AboutUs extends React.Component{


    render(){
        return( 
          <div class='section'>
            <nav>
                    <NavLink to='/'><a class='nav-link-logo'>LOGO</a></NavLink>
                    <span class='nav-span'>
                        <NavLink to='/AboutUs'><a class='nav-span-1'>About Us</a></NavLink>
                        <span class='nav-span-2'>Contact Us</span>
                        <NavLink to='/SignUp'><button>Sign Up</button></NavLink>
                        <NavLink to='/Login'><button>Login In</button></NavLink>
                    </span>
                </nav>
            <div class="container">
              <div class="content-section">
                <div class="title">
                  <h1>About Us</h1>
                </div>
                <div class="content">
                  <h3>Quizz It makes education fun</h3>
                  <p>
                    We create simplified and interactive learning experiences. <br />
    
                    Learning web development should be easy to understand and
                    available for everyone, everywhere! <br />
    
                    QuizzIt is a platform for web developers, covering all the aspects
                    of web development: <br />
    
                    We design for Everyone, you dont need to be programer to take a
                    quizz. <br />
                    We are here to change an education system.
                  </p>
                  <div class="button">
                    <a href="">Read More</a>
                  </div>
                </div>
                <div class="social">
                  <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                  <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
                  <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                </div>
                <div class="info">
                  <div class="j"> 
                    <div>Name: Jeet Khimani</div>
                    <div>NUID: 002115111</div>
                    <div>EmailID: khimani.j@northeastern.edu</div>
                    <a href='#'><img src={linkedin} class='img-linkedin'></img></a>
                  </div>
                  <div class="h"> 
                    <div>Name: Het Shah</div>
                    <div>NUID: 001563170</div>
                    <div>EmailID: shah.het1@northeastern.edu</div>
                    <a href='#'><img src={linkedin} class='img-linkedin'></img></a>
                  </div>
                  <div class="k"> 
                    <div> Name: Kapil Kadge</div>
                    <div>NUID: 002987899</div>
                    <div>EmailID: kadge.k@northeastern.edu</div>
                    <a href='#'><img src={linkedin} class='img-linkedin'></img></a>
                  </div>
                </div>
              </div>
            </div>
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

export default AboutUs;