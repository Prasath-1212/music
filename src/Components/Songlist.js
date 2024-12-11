import React, { useState } from "react"; 
import AddSongsToPlayListDialog from "./AddSongsToPlayListDialog";
import SongCard from "./SongCard";
import './Songlist.css'
import AlertMessage from "./AlertMessage";

const Songlist = ({playlists , setPlaylists }) => {
    
    const [songList] = useState([
        { id: 1, title: 'Song 1' },
        { id: 2, title: 'Song 2' },
        { id: 3, title: 'Song 3' },
        { id: 4, title: 'Song 4' },
        { id: 5, title: 'Song 5' },
    ]);
  
    const [dialog, setDialog] = useState(false);
    const [selectedSong, setSelectedSong] = useState(null);
    const [show, setShow] = useState(false);

    const handleAddToPlaylistClick = (song) => {
        setSelectedSong(song);
        setDialog(true);
    };

    const handleClose = (playlistId) => {
        const updatedPlaylists = playlists.map((playlist) =>
            playlist.id === playlistId && selectedSong !== null && !(playlist.songs.some((song)=>song.id === selectedSong.id)) ? { ...playlist, songs: [...playlist.songs, selectedSong] } : playlist
          );
        setPlaylists(updatedPlaylists);
        setSelectedSong(null);
        setDialog(false);
        setShow(true);
    };

    return (
        <div>
            <div className="songListContainer">
                {songList.map(song => (
                    <SongCard 
                        key={song.id} 
                        song={song} 
                        handleAddToPlaylistClick={handleAddToPlaylistClick} 
                        className="songCard" 
                    />
                ))}
            </div>
            <AddSongsToPlayListDialog
                dialog={dialog}
                handleClose={handleClose}
                playlists={playlists}
                className="dialogContainer" 
            />
            <AlertMessage value={show} onClosed={()=>{setShow(!show)}} severity = "success" >Closed</AlertMessage>
        </div>
    ); 
};

export default Songlist;
