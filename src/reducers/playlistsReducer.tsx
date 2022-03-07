import * as type from '../types';

const initialState = {
    playlists: [],
}

export const playlistsReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case type.SET_PLAYLISTS:

        const { playlists } = action

        return {
            ...state,
            playlists
        }

        default: 
            return state;
    }
}