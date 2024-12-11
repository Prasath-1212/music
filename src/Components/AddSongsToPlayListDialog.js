import {Dialog, Typography } from "@mui/material";
import './AddSongsToPlayListDialog.css';

export default function AddSongsToPlayListDialog({ dialog, handleClose, playlists}) {

    return(
    <Dialog onClose={handleClose} open={dialog}>
        <div className="dialogContainer">
            <Typography variant="h6" className="dialogTitle" gutterBottom>
                Select Playlist
            </Typography>
            {playlists.map((playlist) => (
                <button
                    key={playlist.id}
                    className="playlistButton"
                    onClick={() => { handleClose(playlist.id); }}
                >
                    {playlist.name}
                </button>
            ))}
        </div>
    </Dialog>
    );
}