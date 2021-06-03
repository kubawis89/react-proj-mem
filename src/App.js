import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Memes from "./components/Memes";
import FavoriteMemes from "./components/FavoriteMemes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import AddMem from "./components/AddMem/AddMem";
import SearchMem from "./components/SearchMem";
import RegularMemes from "./components/RegularMemes";
import HotMemes from "./components/HotMemes";
import PoorMemes from "./components/PoorMemes";
import Navigation from "./components/Navigation/Navigation";
import Socials from "./components/Socials/Socials";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navigation />
        {/* sort/page section
        api weather sidebar */}
        <Switch>
          <Route exact path="/">
            <Redirect to="/memes" />
          </Route>
          <Route exact path="/memes">
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
        <Socials />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
