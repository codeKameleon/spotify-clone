import  {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPlaylists, getTracks, getCurrentPlaylistId, getNewPlaylist, setCurrentPlaylistId } from '../../actions/playlistsActions';
import { RootState } from '../../reducers/rootReducer';

import './Playlists.scss';

const Playlists  = () => {
    const dispatch = useDispatch();

    const playlists = useSelector((state: RootState) => state.playlists.playlists);
    const currentPlaylistId = useSelector((state: RootState) => state.playlists.currentPlaylistId);
    const tracks = useSelector((state: RootState) => state.tracks.tracks);

    const [description, setDescription] = useState('');

    useEffect(() => {
        dispatch(getPlaylists())
        dispatch(getCurrentPlaylistId())
        dispatch(getNewPlaylist())
        dispatch(getTracks())
    }, [currentPlaylistId]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const playlist = playlists.find((pl: any) => pl.name === e.currentTarget.value);

        dispatch(setCurrentPlaylistId(playlist.id));

        setDescription(playlist.description)
    }

    return (
        <>
            {playlists.length > 0  &&  (
                <>
                    <h1>Playlists</h1>

                    <div className="playlists">
                        <select className="playlist-selector" onChange={handleChange}>
                            {playlists.map((playlist: any) => {
                                const { id, name } = playlist

                                return (
                                    <option key={id} value={name}>
                                        {name}
                                    </option>
                                )
                            })}
                        </select>  

                        {description && <p className="description">{description}</p>}
                    </div>
            
                    <div className="tracks">
                        {tracks.map((tr: any) => {
                            const { track } =  tr

                            return (
                                <div className="track" key={track.id}>
                                    <img src={track.album.images[0].url} alt={`cover ${track.name}`} />

                                    <div>
                                        <h2>{track.name}</h2>

                                        {track.artists.map((artist: any) => (
                                            <span className="track-artist" key={artist.id}>
                                                {artist.name} 
                                            </span>
                                        ))}
                                    </div>

                                    <span>{track.album.name}</span>

                                    <span>{track.album.release_date}</span>
                                </div>
                            )
                        })}
                    </div>
                </>
            )}
        </>
    )
}

export default Playlists;