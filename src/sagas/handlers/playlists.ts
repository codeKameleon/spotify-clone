import { call, put, select } from 'redux-saga/effects';
import { setPlaylists, setTracks, setCurrentPlaylistId, setNewPlaylist } from '../../actions/playlistsActions';
import { requestGetPlaylists, requestGetTracks, requestCreatePlaylist } from '../requests/playlists';

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
        yield call(requestCreatePlaylist, {name: '', description: ''})
        yield put(setNewPlaylist({name: '', description: ''}));

    } catch(error) {
        console.log('Error', error)
    }
}