import { Card, Typography, CardContent, Button } from "@mui/material";
import './SongCard.css';

export default function SongCard({song, handleAddToPlaylistClick}){
    return(
    <Card variant="outlined" className="card">
        <CardContent className="cardContent">
            <Typography variant="h6" className="songTitle">
                {song.title}
            </Typography>
            <Button
                variant="contained"
                className="addButton"
                onClick={() => handleAddToPlaylistClick(song)}
            >
                Add to Playlist
            </Button>
        </CardContent>
    </Card>
    );
}