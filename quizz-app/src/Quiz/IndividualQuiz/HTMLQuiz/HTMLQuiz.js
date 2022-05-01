import React from 'react';
import './HTMLQuiz.scss';
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
                       <NavLink to='/SignUp'><button>Sign Up</button></NavLink>
                       <NavLink to='/Login'><button>Login In</button></NavLink>
                   </span>
               </nav>
               <div class='individual-quiz-body'>
                   <div class='title'>
                       <p><b>HTML Quiz</b></p>
                   </div>
                   <form>
                       <div class='quiz-questions'>
                           <table>
                               <td>
                                   <tr>
                                       <div class='question'>
                                           <label>Q.1 Full form of HTML?</label><br/>
                                           <input type='radio' name='question1' class='question1' value='true'></input>Hypertext Markup Language<br/>
                                           <input type='radio' name='question1' class='question1' value='false'></input>Hypertext Makeup Language<br/>
                                           <input type='radio' name='question1' class='question1' value='false'></input>Hydrotext Markup Language<br/>
                                       </div>
                                   </tr>
                                   <tr>
                                       <div class='question'>
                                           <label>Q.3 How many levels of heading are there in HTML?</label><br/>
                                           <input type='radio' name='question3' class='question1' value='false'></input>Six<br/>
                                           <input type='radio' name='question3' class='question1' value='false'></input>Four<br/>
                                           <input type='radio' name='question3' class='question1' value='true'></input>Three<br/>
                                       </div>
                                   </tr>
                                   <tr>
                                       <div class='question'>
                                           <label>Q.5 The purpose of markup is to?</label><br/>
                                           <input type='radio' name='question5' class='question1' value='true'></input>enhance the document<br/>
                                           <input type='radio' name='question5' class='question1' value='false'></input>remove hypertext capabilities<br/>
                                           <input type='radio' name='question5' class='question1' value='false'></input>Both of the above<br/>
                                       </div>
                                   </tr>
                                   <tr>
                                       <div class='question'>
                                           <label>Q.7 Which of the following tags do not require a terminator?</label><br/>
                                           <input type='radio' name='question7' class='question1' value='false'></input>u<br/>
                                           <input type='radio' name='question7' class='question1' value='true'></input>br<br/>
                                           <input type='radio' name='question7' class='question1' value='false'></input>b<br/>
                                       </div>
                                   </tr>
                               </td>
                               <td>
                                   <tr>
                                       <div class='question'>
                                           <label>Q.2 What do we use to get ordered list?</label><br/>
                                           <input type='radio' name='question2' class='question1' value='false'></input>ul<br/>
                                           <input type='radio' name='question2' class='question1' value='false'></input>ml<br/>
                                           <input type='radio' name='question2' class='question1' value='true'></input>ol<br/>
                                       </div>
                                   </tr>
                                   <tr>
                                       <div class='question'>
                                           <label>Q.4 _____ tag is used before beginning of the paragraph text?</label><br/>
                                           <input type='radio' name='question4' class='question1' value='true'></input>p<br/>
                                           <input type='radio' name='question4' class='question1' value='false'></input>textarea<br/>
                                           <input type='radio' name='question4' class='question1' value='false'></input>sup<br/>
                                       </div>
                                   </tr>
                                   <tr>
                                       <div class='question'>
                                           <label>Q.6 HTML documents have a ______ extention?</label><br/>
                                           <input type='radio' name='question6' class='question1' value='false'></input>.htx or .htxl<br/>
                                           <input type='radio' name='question6' class='question1' value='true'></input>.htm or .html<br/>
                                           <input type='radio' name='question6' class='question1' value='false'></input>.hmt or . hmtl<br/>
                                       </div>
                                   </tr>
                                   <tr>
                                       <div class='question'>
                                           <label>Q.8 For a particular font its size attribute can be an absolute value ranging from</label><br/>
                                           <input type='radio' name='question8' class='question1' value='true'></input>1-10<br/>
                                           <input type='radio' name='question8' class='question1' value='false'></input>1-9<br/>
                                           <input type='radio' name='question8' class='question1' value='false'></input>1-7<br/>
                                       </div>
                                   </tr>
                               </td>
                           </table>
                           <button class='submit-btn'>Submit</button>
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

