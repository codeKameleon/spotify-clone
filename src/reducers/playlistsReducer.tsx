import * as type from '../types';

const initialState = {
    playlists: [],
    currentPlaylistId: ''
}

export const playlistsReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case type.SET_PLAYLISTS:

        const { playlists } = action

        return {
            ...state,
            playlists
        }
        
        case type.SET_CURRENT_PLAYLIST_ID:

        const { currentPlaylistId } = action

        return {
            ...state,
            currentPlaylistId
        }

        default: 
            return state;
    }
}