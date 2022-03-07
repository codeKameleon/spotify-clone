import { call, put } from 'redux-saga/effects';
import { setPlaylists } from '../../actions/playlistsActions';
import { requestGetPlaylists } from '../requests/playlists';

export function* handleGetPlaylists(): any {
    try {
        const playlists = yield call(requestGetPlaylists);
        yield put(setPlaylists(playlists.data.items));

    } catch(error) {
        console.log('Error', error)
    }
}