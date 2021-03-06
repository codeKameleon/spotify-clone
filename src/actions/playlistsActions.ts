import * as type from '../types';

// Playlists
export const getPlaylists = () => ({
    type: type.GET_PLAYLISTS
})

export const setPlaylists = (playlists: []) => ({
    type: type.SET_PLAYLISTS,
    playlists
})

export const getNewPlaylist = () => ({
    type: type.GET_NEW_PLAYLIST
})

export const setNewPlaylist = (playlist: {}) => ({
    type: type.SET_NEW_PLAYLIST,
    playlist
})

// Playlist
export const getCurrentPlaylistId = () => ({
    type: type.GET_CURRENT_PLAYLIST_ID
})

export const setCurrentPlaylistId = (currentPlaylistId: string) => ({
    type: type.SET_CURRENT_PLAYLIST_ID,
    currentPlaylistId
})

// Tracks
export const getTracks = () => ({
    type: type.GET_TRACKS
})

export const setTracks = (tracks: []) => ({
    type: type.SET_TRACKS,
    tracks
})
