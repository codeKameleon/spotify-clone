import * as type from '../types';

export const getPlaylists = () => ({
    type: type.GET_PLAYLISTS
})

export const setPlaylists = (playlists: []) => ({
    type: type.SET_PLAYLISTS,
    playlists
})

export const getCurrentPlaylistId = () => ({
    type: type.GET_CURRENT_PLAYLIST_ID
})

export const setCurrentPlaylistId = (currentPlaylistId: string) => ({
    type: type.SET_CURRENT_PLAYLIST_ID,
    currentPlaylistId
})

export const getTracks = () => ({
    type: type.GET_TRACKS
})

export const setTracks = (tracks: []) => ({
    type: type.SET_TRACKS,
    tracks
})
