import React, {useState} from "react";
import PlaylistCard from "./PlaylistCard";
import CreateNewPlaylistDialog from "./CreateNewPlaylistDialog";
import './Playlist.css'
import AlertMessage from "./AlertMessage";
export default function Playlist({playlists, handleDeletePlaylist, handleCreatePlaylist}) {
    const [dialog, setDialog] = useState(false);
    const [alert, setAlert] = useState(false);
    function handleCreate_Playlist(playlistName) {
        setAlert(handleCreatePlaylist(playlistName));
    }
    return(<>
        <div className="container">
            <div className="div-button">
            <button 
                className="createButton" 
                onClick={() => setDialog(true)}
            >
                Create New Playlist
            </button>
            </div>
            <div className="playlistCards">
                {playlists.map(playlist => (
                    <PlaylistCard 
                        key={playlist.id} 
                        playlist={playlist} 
                        handleDeletePlaylist={handleDeletePlaylist} 
                    />
                ))}
            </div>
        </div>
        <CreateNewPlaylistDialog 
            dialog={dialog} 
            handleClose={() => setDialog(false)} 
            handleCreatePlaylist={handleCreate_Playlist} 
        />
        <AlertMessage value={alert} onClosed={()=>{setAlert(false)}} severity="error">Playlist already exists!</AlertMessage>}
    </>);
}