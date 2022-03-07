import  {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPlaylists } from '../../actions/playlistsActions';
import { RootState } from '../../reducers/rootReducer';

import './Playlists.scss';

export function Playlists () {
    const dispatch = useDispatch();
    const playlists = useSelector((state: RootState) => state.playlists.playlists);
    const [description, setDescription] = useState(playlists[0].description);

    useEffect(() => {
        dispatch(getPlaylists())
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const playlist = playlists.find((pl: any) => pl.name === e.currentTarget.value)
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
                


        </>

    )
}