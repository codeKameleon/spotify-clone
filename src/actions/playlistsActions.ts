import * as type from '../types';

export const getPlaylists = () => ({
    type: type.GET_PLAYLISTS
})

export const setPlaylists = (playlists: []) => ({
    type: type.SET_PLAYLISTS,
    playlists
})