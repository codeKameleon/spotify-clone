import axios from 'axios';
import { getToken } from '../../utils/cookie';

// Get playlists
export function requestGetPlaylists () {
    return axios.get('https://api.spotify.com/v1/me/playlists?limit=30', {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    })
}

// Create new playlist
export function requestCreatePlaylist (playlist: {}) {
    return axios.post(`https://api.spotify.com/v1/users/${process.env.REACT_APP_USER_ID}/playlists`,
        playlist,
        {
            headers: {
                'Authorization': `Bearer ${getToken()}`
        }
    })
}

// Get tracks
export function requestGetTracks (playlistId: string) {
    return axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    })
}
