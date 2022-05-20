// IMPORT useState
import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import { fetchNowPlaying } from './services/movieDb';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import "./index.css";

export default function App() {
  const [nowShowing, setNowShowing] = useState([]);

  async function getAppData() {
    const nowPlayingMovies = await fetchNowPlaying('BE');
    setNowShowing(nowPlayingMovies);
  }

  useEffect(() => {
    setTimeout(() => {
      getAppData()
    }, 5000)
  }, [])

  console.log('Now showing', nowShowing)

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
                render={() => <Search nowShowing={nowShowing.results}/>}
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
