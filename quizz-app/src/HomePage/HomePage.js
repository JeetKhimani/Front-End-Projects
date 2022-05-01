import React from 'react';
import './HomePage.scss';
import {NavLink} from 'react-router-dom';
import facebook from'../Assets/facebook.png';
import instagram from'../Assets/instagram.png';
import twitter from'../Assets/twitter.png';

export class HomePage extends React.Component{


    render(){
        return(
            <div class='main-div'>
                <nav>
                    <NavLink to='/'><a class='nav-link-logo'>LOGO</a></NavLink>
                    <span class='nav-span'>
                        <NavLink to='/AboutUs'><a class='nav-span-1'>About Us</a></NavLink>
                        <NavLink to='/ContactUs'><a class='nav-span-2'>Contact Us</a></NavLink>
                        <NavLink to='/SignUp'><button class='homepage-signup-btn'>Sign Up</button></NavLink>
                        <NavLink to='/Login'><button class='homepage-login-btn'>Login In</button></NavLink>
                    </span>
                </nav>
                <div class='body'>
                    <div class='body-title'>
                        Quiz It!
                    </div>
                    <div class='body-content'>
                        <article><i>
                        We believe
                        Learning is the source of human progress.

                        It has the power to transform our world
                        from illness to health,
                        from poverty to prosperity,
                        from conflict to peace.

                        It has the power to transform our lives
                        for ourselves,
                        for our families,
                        for our communities.

                        No matter who we are or where we are,
                        learning empowers us to change and grow
                        and redefine what's possible.
                        That’s why access to the best learning is a right, not a privilege.

                        And that’s why is here.
                        We partner with the best institutions
                        to bring the best learning
                        to every corner of the world.

                        So that anyone, anywhere has the power to
                        transform their life through learning.
                        </i></article>
                    </div>
                    <br/><br/>
                    <div class='body-benefits'>
                        <div class='body-benefits-title'>
                            <h2 class='fm'>Benefits of Quiz</h2>
                        </div>
                        <div class='body-benefits-content'>
                            <ul>
                                <li><i>We create relationships that make a valuable difference in our customer businesses.</i></li>
                                <li><i>We provide outstanding service and products that together deliver core value to our customers.</i></li>
                                <li><i>We value our customers and employees, encourage their will, and reward their performance.</i></li>
                                <li><i>We have a commitment to innovation and excellence that earn us customer trust.</i></li>
                                <li><i>We never settle until we give the best in terms of quality.</i></li>
                            </ul>
                        </div>
                    </div>
                    <div class='body-types'>
                        <div class='body-types-title'>
                            <h2>Available Quiz</h2>
                        </div>
                        <div class='body-types-content'>
                            <ul class='fmm'>
                                <li><i>HTML</i></li>
                                <li><i>CSS</i></li>
                            </ul>
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

export default HomePage;