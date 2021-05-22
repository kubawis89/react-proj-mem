import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Memes from './components/Memes';
import {useDispatch, useSelector} from 'react-redux';

function App() {
  // const dispatch = useDispatch();


  return (
    <div className="App">
    <BrowserRouter> 
      <header>
        <h1 className="logo">MEM serwis</h1>
        <nav id="topnav">
          <ul className="menu">
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Hot</li></a>
          <a href="#"><li>Regular</li></a>
          <a href="#"><li>Poor</li></a>
          <a href="#"><li>Favorites</li></a>
          <a href="#"><li>Add</li></a>
          <a href="#"><li>Search...</li></a>
          </ul>
        </nav>
      </header>
      <Switch>
      <Route exact path='/'>
      <main>
              <Memes />
      </main>
      </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
      <div className="socials">
            <div className="socialdivs">
                <a href="https://www.facebook.com">
                    <div className="fb">
                    <img src="/images/fb.png" width="80" alt="fb"></img>
                    </div>
                </a>
                <a href="https://www.youtube.com">
                    <div className="yt">
                        <i className="icon-youtube"></i>
                    </div>
                </a>
                <a href="https://www.twitter.com">
                    <div className="tw">
                        <i className="icon-twitter"></i>
                    </div>
                </a>
                <a href="https://www.google.com">
                    <div className="gplus">
                        <i className="icon-gplus"></i>
                    </div>
                </a>
            </div>
        </div>
      <footer>
            <p>Copyright &reg; by WSB students 2020/2021</p>
      </footer>
    </BrowserRouter> 
    </div>
  );
}

export default App;

// import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';