import React from 'react';
import './App.css';

function App() {
  const getAuthURL = (): string => {
    const { REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URI } = process.env

    const client_ID = REACT_APP_CLIENT_ID;
    const redirect_URI =  REACT_APP_REDIRECT_URI;
    const scopes = ["playlist-read-private", "playlist-modify-private", "user-read-recently-played"];

    const auth_URL = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_ID}&scope=${scopes}&redirect_uri=${redirect_URI}`

    return auth_URL
  }

  return (
    <div className="App">
      <header className="App-header">
        <a href={getAuthURL()}>Authentication</a>
      </header>
    </div>
  );
}

export default App;
