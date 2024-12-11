import { Dialog } from "@mui/material";
import { useState } from "react";
import './CreateNewPlaylistDialog.css'

export default function CreateNewPlaylistDialog({handleCreatePlaylist, handleClose, dialog}) {
    const [playlistName, setPlaylistName ]= useState("Playlist");

    return(<>
    <Dialog onClose={handleClose} open={dialog}>
        <div className="dialog">
            <input 
                type="text" 
                className="input" 
                value={playlistName} 
                onChange={(e) => setPlaylistName(e.target.value)} 
            />
            <button 
                className="button" 
                onClick={() => { handleClose(); handleCreatePlaylist(playlistName); }}
            >
                Create Playlist
            </button>
        </div>
    </Dialog>
    
    </>);
}