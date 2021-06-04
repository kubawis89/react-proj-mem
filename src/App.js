import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Memes from "./components/Memes/Memes";
import HotMemes from "./components/HotMemes/HotMemes";
import RegularMemes from "./components/RegularMemes/RegularMemes";
import PoorMemes from "./components/PoorMemes/PoorMemes";
import FavoriteMemes from "./components/FavoriteMemes/FavoriteMemes";
import AddMem from "./components/AddMem/AddMem";
import Socials from "./components/Socials/Socials";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import "./App.scss";
library.add(fab);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Redirect to="/memes" />
          </Route>
          <Route exact path="/memes">
            <Memes />
          </Route>
          <Route exact path="/hot">
            <HotMemes />
          </Route>
          <Route exact path="/regular">
            <RegularMemes />
          </Route>
          <Route exact path="/poor">
            <PoorMemes />
          </Route>
          <Route exact path="/favorite">
            <FavoriteMemes />
          </Route>
          <Route exact path="/add">
            <AddMem />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
        <Socials />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
