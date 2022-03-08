import * as type from '../types';

export const getPlaylists = () => ({
    type: type.GET_PLAYLISTS
})

export const setPlaylists = (playlists: []) => ({
    type: type.SET_PLAYLISTS,
    playlists
})

export const getTracks = () => ({
    type: type.GET_TRACKS
})

export const setTracks = (tracks: []) => ({
    type: type.SET_TRACKS,
    tracks
})
