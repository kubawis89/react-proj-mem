import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Memes from './components/Memes';

function App() {
  return (
    <div className="App">
    <BrowserRouter> 
      <header>
        <section className="logo">
          <a href="#"><img src="https://unsplash.it/150/60?image=906" alt="LOGO" /></a>
        </section>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Hot</a></li>
            <li><a href="#">Regular</a></li>
            <li><a href="#">Poor</a></li>
            <li><a href="#">Favorites</a></li>
            <li><a href="#">Add</a></li>
            <li><a href="#">Search...</a></li>
          </ul>
        </nav>
      </header>
      <hr />
      <Switch>
      <Route exact path='/'>
      <main>
            <article>
              <Memes />
            </article>
      <aside>
        <section className="widget">
          <h3>About author</h3>
          <img src="https://unsplash.it/100/100?image=1062" alt="logoAuthor" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam quae molestias officia rerum a nisi porro molestiae ut corrupti voluptatum corporis, tenetur consectetur ipsam assumenda provident neque illo! Error!</p>
        </section>
        <section className="links">
          <h3>Links</h3>
          <ul>
            <li><a href="#">Lorem, ipsum dolor.</a></li>
            <li><a href="#">Lorem ipsum dolor sit.</a></li>
            <li><a href="#">Lorem ipsum dolor sit amet.</a></li>
          </ul>
        </section>
      </aside>
      </main>
      <hr />
      </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
      <footer>
            <p>Copyright &reg; by WSB students 2020/2021</p>
      </footer>
    </BrowserRouter> 
    </div>
  );
}

export default App;

// import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';