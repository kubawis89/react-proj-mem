import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Memes from "./components/Memes";
import FavoriteMemes from "./components/FavoriteMemes";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddMem from "./components/AddMem";
import SearchMem from "./components/SearchMem";
import RegularMemes from "./components/RegularMemes";
import HotMemes from "./components/HotMemes";
import PoorMemes from "./components/PoorMemes";

function App() {
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <main>
              <Memes />
            </main>
          </Route>
          <Route exact path="/hot">
            <main>
              <HotMemes />
            </main>
          </Route>
          <Route exact path="/regular">
            <main>
              <RegularMemes />
            </main>
          </Route>
          <Route exact path="/poor">
            <main>
              <PoorMemes />
            </main>
          </Route>
          <Route exact path="/favorite">
            <main>
              <FavoriteMemes />
            </main>
          </Route>
          <Route exact path="/add">
            <main>
              <AddMem />
            </main>
          </Route>
          <Route exact path="/search">
            <main>
              <SearchMem />
            </main>
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

// import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
