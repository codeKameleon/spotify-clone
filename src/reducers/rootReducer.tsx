import { combineReducers } from 'redux';
import { playlistsReducer } from './playlistsReducer';
import { tracksReducer } from './tracksReducer';

export const rootReducer = combineReducers({
    playlists: playlistsReducer,
    tracks: tracksReducer
})

export type RootState =  ReturnType<typeof rootReducer>;