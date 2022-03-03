import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Playlists.scss'

export function Playlists () {
    const [playlists, setPlaylists] = useState<any[]>([])
    const [tracks, setTracks] = useState<any[]>([])

    const { REACT_APP_TOKEN } = process.env;

    useEffect(() => {
        const getPlaylists = async () => {
          try {
            const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
                headers: {
                'Authorization': `Bearer ${REACT_APP_TOKEN}`
                }
            });            

            const data = response.data.items
            setPlaylists(data)
    
          } catch(err) {
            console.log(err)
          }
        }
    
        getPlaylists()

    }, [playlists])

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const playlistID = playlists.find(pl => pl.name === e.currentTarget.value).id

        const getTracks = async () => {
            try {
              const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
                  headers: {
                  'Authorization': `Bearer ${REACT_APP_TOKEN}`
                  }
              });            
  
              const data = response.data.items
              console.log(data)
              setTracks(data)
      
            } catch(err) {
              console.log(err)
            }
        }
      
        getTracks()
    }

    return (
        <>
            <h2>Playlists</h2>

            <select name="playlists" id="playlists" onChange={handleChange}>
                {playlists.map(playlist => {
                    const { id, name } = playlist

                    return (
                        <option key={id} value={name}>
                            {name}
                        </option>
                    )
                })}
            </select>
            
            <div className="tracks">
                {tracks.map(tr => {
                    const { track } = tr;

                    return (
                        <div className="track" key={track.id}>
                            <img src={track.album.images[0].url} alt={`cover ${track.name}`} />

                            <div>
                                <h3>{track.name}</h3>
                                {track.artists.map((artist: any) => (
                                    <span key={artist.id}>{artist.name} </span>
                                ))}
                            </div>

                            <span>{track.album.name}</span>

                            <span>{track.album.release_date}</span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}