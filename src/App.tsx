import { useState, useEffect } from 'react';

import { getAuthURL } from './utils/auth'

import { Playlists } from './features/Playlists/Playlists';

import './App.scss';

const App = () => {
  const [token, setToken] = useState<string | null>('')

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token')

    if(hash && token == null) {
      let token = hash.replace(/#access_token=([\w\-_]+)/g, '$1');
      window.location.hash = "";
      window.localStorage.setItem('token', token)
    }

    setToken(token)
  }, [token])

  return (
    <div className="app">
      <header>
        <div className="wrapper">
          <h1>Spotify</h1>
        {!window.localStorage.getItem('token') && <a href={getAuthURL()}>Authentication</a>}
        </div>
      </header>

      <main>
        <div className="wrapper">
          {
          !window.localStorage.getItem('token') ? (
            <div>
              You need a valid token to access Spotify API.
            </div>
          ) :
            (
              <>
                <Playlists/>
              </>
          )
        }
        </div>
      </main>
    </div>
  );
}

export default App;
