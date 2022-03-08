import { call, put } from 'redux-saga/effects';
import { setPlaylists, setTracks } from '../../actions/playlistsActions';
import { requestGetPlaylists, requestGetTracks } from '../requests/playlists';

export function* handleGetPlaylists(): any {
    try {
        const playlists = yield call(requestGetPlaylists);
        console.log('playlists', playlists)
        yield put(setPlaylists(playlists.data.items));
        const tracks = yield call(requestGetTracks, playlists.data.items[0].id);
        console.log('tracks', tracks)
        yield put(setTracks(tracks.data.items))

    } catch(error) {
        console.log('Error', error)
    }
}
