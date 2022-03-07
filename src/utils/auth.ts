export const getAuthURL = () => {
    const client_ID = process.env.REACT_APP_CLIENT_ID;
    const redirect_URI =  process.env.REACT_APP_REDIRECT_URI;
    const scopes = ["playlist-read-private", "playlist-modify-private", "user-read-recently-played"];

    const auth_URL = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_ID}&scope=${scopes}&redirect_uri=${redirect_URI}`

    return auth_URL
  }