import * as type from '../types';

const initialState = {
    tracks: [],
}

export const tracksReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case type.SET_TRACKS:

        const { tracks } = action

        return {
            ...state,
            tracks
        }

        default: 
            return state;
    }
}