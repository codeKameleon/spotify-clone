import axios from 'axios';
import { getToken } from '../../utils/cookie';

export function requestGetPlaylists () {
    return axios.get('https://api.spotify.com/v1/me/playlists',{
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    })
}

// export function requestCreatePlaylist () {
//     return axios.post(`https://api.spotify.com/v1/users/${process.env.REACT_APP_USER_ID}/playlists`,
//         {
//             'name': 'new playlist',
//             'description': 'test',
//             'public': false
//         },
//         {
//             headers: {
//                 'Authorization': `Bearer ${getToken()}`
//         }
//     })
// }

export function requestGetTracks (playlistId: string) {
    return axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`,{
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    })
}
