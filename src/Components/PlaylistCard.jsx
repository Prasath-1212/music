import { Badge, Card, CardContent, Toolbar, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import './PlaylistCard.css'
export default function PlaylistCard({playlist, handleDeletePlaylist}) {
    return(
        <Card variant="outlined" className="card">
            <CardContent className="cardContent">
                <Toolbar className="toolbar">
                <Typography variant="h6">
                    {playlist.name}
                </Typography>
                <Badge badgeContent={playlist.songs.length} color="primary">
                        <LibraryMusicIcon />
                </Badge>
                </Toolbar>
                <button
                    className="button"
                    onClick={() => handleDeletePlaylist(playlist.id)}
                >
                    <DeleteIcon />
                </button>
            </CardContent>
        </Card>
    );
}