import { combineReducers } from 'redux';
import { playlistsReducer } from './playlistsReducer';

export const rootReducer = combineReducers({
    playlists: playlistsReducer
})

export type RootState =  ReturnType<typeof rootReducer>;