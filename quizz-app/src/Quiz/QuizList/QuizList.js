import React from 'react';
import './QuizList.scss';
import {NavLink} from 'react-router-dom';
import facebook from'../../Assets/facebook.png';
import instagram from'../../Assets/instagram.png';
import twitter from'../../Assets/twitter.png';

export class QuizList extends React.Component{

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
            <div class='body'>
                <div class="title">
                    <h1>Available Quizzes:</h1>
                </div>
                <div class="quiz-list">
                        <NavLink to='/HTMLQuiz'><button>Quiz on HTML</button></NavLink><br/>
                        <NavLink to='/CSSQuiz'><button>Quiz on CSS</button></NavLink><br/>
                        <button>Previous Results</button>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
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

export default QuizList;