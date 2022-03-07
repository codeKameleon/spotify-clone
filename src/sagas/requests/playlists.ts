import axios from 'axios';

export function requestGetPlaylists () {
    return axios.get('https://api.spotify.com/v1/me/playlists',{
        headers: {
            'Authorization': `Bearer ${window.localStorage.getItem('token')}`
        }
    })
}