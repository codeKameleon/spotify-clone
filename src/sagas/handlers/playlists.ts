import { call, put, select } from 'redux-saga/effects';
import { setPlaylists, setTracks, setCurrentPlaylistId } from '../../actions/playlistsActions';
import { requestGetPlaylists, requestGetTracks } from '../requests/playlists';

export function* handleGetPlaylists(): any {
    try {
        const playlists = yield call(requestGetPlaylists);
        yield put(setPlaylists(playlists.data.items));

        const currentPlaylistId = yield select(state => state.playlists.currentPlaylistId)
        yield put(setCurrentPlaylistId(currentPlaylistId || playlists.data.items[0].id))
        
        const tracks = yield call(requestGetTracks, currentPlaylistId || playlists.data.items[0].id);
        yield put(setTracks(tracks.data.items))

    } catch(error) {
        console.log('Error', error)
    }
}

export function* handleCreatePlaylist(): any {
    try {
        // get new playlist object from form
        // post call with new playlist object
    } catch(error) {
        console.log('Error', error)
    }
}