import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

import { getAuthURL } from './utils/auth'

import { Playlists } from './features/Playlists/Playlists';

import './App.scss';

const App = () => {
  const [cookies, setCookie] = useCookies(["token"])

  useEffect(() => {
    const hash = window.location.hash;

    if(hash && !cookies.token) {
      let token = hash.replace(/#access_token=([\w\-_]+)/g, '$1');
      window.location.hash = "";

      setCookie('token', token, {
        path: '/',
        maxAge: 3600
      })
    }
  }, [cookies])

  return (
    <div className="app">
      <header>
        <div className="wrapper">
          <h1>Spotify</h1>
        {!cookies.token && <a href={getAuthURL()}>Authentication</a>}
        </div>
      </header>

      <main>
        <div className="wrapper">
          {
          !cookies.token ? (
            <div className="authenticate">
              <h2>You need a valid token to access Spotify API.</h2>
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
