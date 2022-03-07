import axios from 'axios';
import { getToken } from '../../utils/cookie';

export function requestGetPlaylists () {
    return axios.get('https://api.spotify.com/v1/me/playlists',{
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    })
}