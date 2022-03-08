import axios from 'axios';
import { getToken } from '../../utils/cookie';

export function requestGetPlaylists () {
    return axios.get('https://api.spotify.com/v1/me/playlists',{
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    })
}

export function requestGetTracks (playlistId: string) {
    return axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`,{
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    })
}
