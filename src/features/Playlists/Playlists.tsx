import  {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPlaylists } from '../../actions/playlistsActions';
import { RootState } from '../../reducers/rootReducer';

import './Playlists.scss';

export function Playlists () {
    const dispatch = useDispatch();
    const playlists = useSelector((state: RootState) => state.playlists.playlists)

    console.log(playlists)

    useEffect(() => {
        dispatch(getPlaylists())
    }, []);

    return (
        <>
            <h2>Playlists</h2>

            <div className="playlists">
                <select>
                    {playlists.map((playlist: any) => {
                        const { id, name } = playlist

                        return (
                            <option key={id} value={name}>
                                {name}
                            </option>
                        )
                    })}
                </select> 
            </div>
        </>
    )
}