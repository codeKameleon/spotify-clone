import { all, takeEvery } from 'redux-saga/effects';
import { GET_PLAYLISTS, GET_TRACKS, GET_CURRENT_PLAYLIST_ID, GET_NEW_PLAYLIST } from '../types';
import { handleGetPlaylists, handleCreatePlaylist } from './handlers/playlists';


export function* watcherSaga () {
    yield all([
        takeEvery(GET_PLAYLISTS, handleGetPlaylists),
        takeEvery(GET_CURRENT_PLAYLIST_ID, handleGetPlaylists),
        takeEvery(GET_NEW_PLAYLIST, handleCreatePlaylist),
        takeEvery(GET_TRACKS, handleGetPlaylists),
    ])
}