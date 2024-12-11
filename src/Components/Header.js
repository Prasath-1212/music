import {Toolbar, Typography,AppBar, Badge } from '@mui/material';
import React from 'react';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import './Header.css';

export default function Header({size, set_bool_playlist, bool_playlist}) {
    const title = "Music Playlist App";

    return(
        <AppBar position="static">
            <Toolbar className="toolbar">
                <Typography variant="h6" className="title"> 
                    {title}
                </Typography>
                <button className="button" onClick={()=>{set_bool_playlist(!bool_playlist)}}>
                    <Badge badgeContent={size} color="primary">
                        <LibraryMusicIcon />
                    </Badge>
                </button>
            </Toolbar>
        </AppBar>
    );
}