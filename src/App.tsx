import React, { useEffect, useState } from 'react';
import { Playlists } from './features/Playlists/Playlists'
import './App.scss';

function App() {
  const { REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URI } = process.env

  const getAuthURL = (): string => {
    const client_ID = REACT_APP_CLIENT_ID;
    const redirect_URI =  REACT_APP_REDIRECT_URI;
    const scopes = ["playlist-read-private", "playlist-modify-private", "user-read-recently-played"];

    const auth_URL = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_ID}&scope=${scopes}&redirect_uri=${redirect_URI}`

    return auth_URL
  }

  return (
    <div className="app">
      <header>
        <div className="wrapper">
          <h1>Spotify</h1>
         <a href={getAuthURL()}>Authentication</a>
        </div>
      </header>

      <main>
        <div className="wrapper">
          <Playlists/>
        </div>
      </main>
    </div>
  );
}

export default App;
