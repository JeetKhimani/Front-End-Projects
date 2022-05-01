import React from 'react';
import './CSSQuiz.scss';
import {NavLink} from 'react-router-dom';
import facebook from'../../../Assets/facebook.png';
import instagram from'../../../Assets/instagram.png';
import twitter from'../../../Assets/twitter.png';
 
export class IndividualQuiz extends React.Component{
 
   render(){
       return(
           <div class='main'>
                <nav>
                   <NavLink to='/'><a class='nav-link-logo'>LOGO</a></NavLink>
                   <span class='nav-span'>
                       <span class='nav-span-1'>About Us</span>
                       <span class='nav-span-2'>Contact Us</span>
                       <NavLink to='/SignUp'><button class='homepage-signup-btn'>Sign Up</button></NavLink>
                       <NavLink to='/Login'><button>Login In</button></NavLink>
                   </span>
               </nav>
               <div class='individual-quiz-body'>
                   <div class='title'>
                       <p><b>CSS Quiz</b></p>
                   </div>
                   <form>
                       <div class='quiz-questions'>
                           <table>
                               <td>
                                   <tr>
                                       <div class='question'>
                                           <label>Q.1 Full form of CSS?</label><br/>
                                           <input type='radio' name='question1' class='question1' value='true'></input>Cascading Style Sheet<br/>
                                           <input type='radio' name='question1' class='question1' value='false'></input>Cascade Style Sheet<br/>
                                           <input type='radio' name='question1' class='question1' value='false'></input>Color Style and Sheet<br/>
                                       </div>
                                   </tr>
                                   <tr>
                                       <div class='question'>
                                           <label>Q.3 which of the following is the correct syntax for referring the external style sheet?</label><br/>
                                           <input type='radio' name='question3' class='question1' value='false'></input>style src="example.css"<br/>
                                           <input type='radio' name='question3' class='question1' value='true'></input>link rel="stylesheet" type="text/css" href="example.css<br/>
                                           <input type='radio' name='question3' class='question1' value='false'></input>style src=example<br/>
                                       </div>
                                   </tr>
                                   <tr>
                                       <div class='question'>
                                           <label>Q.5 The property of CSS used to change the background colour of an element is?</label><br/>
                                           <input type='radio' name='question5' class='question1' value='false'></input>bg-color<br/>
                                           <input type='radio' name='question5' class='question1' value='false'></input>color<br/>
                                           <input type='radio' name='question5' class='question1' value='true'></input>background-color<br/>
                                       </div>
                                   </tr>
                                   <tr>
                                       <div class='question'>
                                           <label>Q.7 The property in CSS used to change the text color of an element is?</label><br/>
                                           <input type='radio' name='question7' class='question1' value='true'></input>color<br/>
                                           <input type='radio' name='question7' class='question1' value='false'></input>bg-color<br/>
                                           <input type='radio' name='question7' class='question1' value='false'></input>background-color<br/>
                                       </div>
                                   </tr>
                               </td>
                               <td>
                                   <tr>
                                       <div class='question'>
                                           <label>Q.2 Full form of HTML?</label><br/>
                                           <input type='radio' name='question2' class='question1' value='true'></input>Hypertext Markup Language<br/>
                                           <input type='radio' name='question2' class='question1' value='false'></input>Hypertext Makeup Language<br/>
                                           <input type='radio' name='question2' class='question1' value='false'></input>Hydrotext Markup Language<br/>
                                       </div>
                                   </tr>
                                   <tr>
                                       <div class='question'>
                                           <label>Q.4 The property used to control elements font sizes is?</label><br/>  
                                           <input type='radio' name='question4' class='question1' value='false'></input>text-style<br/>
                                           <input type='radio' name='question4' class='question1' value='false'></input>text-size<br/>
                                           <input type='radio' name='question4' class='question1' value='true'></input>font-size<br/>
                                       </div>
                                   </tr>
                                   <tr>
                                       <div class='question'>
                                           <label>Q.6 The HTML attributes used to define the in-line style is?</label><br/>
                                           <input type='radio' name='question6' class='question1' value='false'></input>class<br/>
                                           <input type='radio' name='question6' class='question1' value='true'></input>style<br/>
                                           <input type='radio' name='question6' class='question1' value='false'></input>styles<br/>
                                       </div>
                                   </tr>
                                   <tr>
                                       <div class='question'>
                                           <label>Q.8 The HTML attribute used to define the internal stylesheet is?</label><br/>
                                           <input type='radio' name='question8' class='question1' value='true'></input>style<br/>
                                           <input type='radio' name='question8' class='question1' value='false'></input>link<br/>
                                           <input type='radio' name='question8' class='question1' value='false'></input>script<br/>
                                       </div>
                                   </tr>
                               </td>
                           </table>
                           <button class='CSS-quiz-submit-btn'>Submit</button>
                       </div>
                   </form>
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
  
export default IndividualQuiz;

