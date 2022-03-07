import { all, takeEvery } from 'redux-saga/effects';
import { GET_PLAYLISTS } from '../types';
import { handleGetPlaylists } from './handlers/playlists';


export function* watcherSaga () {
    yield all([
        takeEvery(GET_PLAYLISTS, handleGetPlaylists)
    ])
}