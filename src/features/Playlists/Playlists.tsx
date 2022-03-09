import  {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPlaylists, getTracks, getCurrentPlaylistId, setCurrentPlaylistId } from '../../actions/playlistsActions';
import { RootState } from '../../reducers/rootReducer';

import './Playlists.scss';

export function Playlists () {
    const dispatch = useDispatch();
    const playlists = useSelector((state: RootState) => state.playlists.playlists);
    const currentPlaylistId = useSelector((state: RootState) => state.playlists.currentPlaylistId);
    const tracks = useSelector((state: RootState) => state.tracks.tracks);

    const [description, setDescription] = useState('');

    useEffect(() => {
        dispatch(getPlaylists())
        dispatch(getCurrentPlaylistId())
        dispatch(getTracks())
    }, [currentPlaylistId]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const playlist = playlists.find((pl: any) => pl.name === e.currentTarget.value);

        dispatch(setCurrentPlaylistId(playlist.id));

        setDescription(playlist.description)
    }
    
    return (
        <>
            <h2>Playlists</h2>

            <div className="playlists">
                <select onChange={handleChange}>
                    {playlists.map((playlist: any) => {
                        const { id, name } = playlist

                        return (
                            <option key={id} value={name}>
                                {name}
                            </option>
                        )
                    })}
                </select> 

                <p>{description}</p>
            </div>
            
            <div className="tracks">
                {tracks.map((tr: any) => (
                    <div key={tr.track.id}>
                    <span>{tr.track.name}</span>
                    </div>
                ))}
            </div>
        </>
    )
}