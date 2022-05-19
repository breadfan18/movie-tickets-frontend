// IMPORT useState
import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {

  // test
  return (
    <div>
      <Header />
      <main>
        {
          <>
            <Switch>
              <Route
                exact path='/'
                render={() => 'Home'}
              />
              <Route
                exact path='/theaters'
                render={() => 'Theaters'}
              />
              <Route
                exact path='/search'
                render={() => 'Search'}
              />
              <Route
                exact path='/favorites'
                render={() => 'Favorites'}
              />
            </Switch>
          </>
        }
      </main>
      <Footer />
    </div>

  );
}
