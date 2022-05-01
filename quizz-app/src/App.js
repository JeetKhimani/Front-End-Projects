import './App.scss';
import HomePage from './HomePage/HomePage';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import HTMLQuiz from './Quiz/IndividualQuiz/HTMLQuiz/HTMLQuiz';
import CSSQuiz from './Quiz/IndividualQuiz/CSSQuiz/CSSQuiz'
import QuizList from './Quiz/QuizList/QuizList';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    //<HomePage/>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/SignUp' component={SignUp}></Route>
        <Route exact path='/Login' component={Login}></Route>
        <Route exact path='/HTMLQuiz' component={HTMLQuiz}></Route>
        <Route exact path='/CSSQuiz' component={CSSQuiz}></Route>
        <Route exact path='/QuizList' component={QuizList}></Route>
        <Route exact path='/AboutUs' component={AboutUs}></Route>
        <Route exact path='/ContactUs' component={ContactUs}></Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
