import Header from './Header';
import React, { useState } from 'react';
import Songlist from './Songlist';
import Playlist from './Playlist';


function Home() {
  const [playlists, setPlaylists] = useState([
    { id: 1, name: 'Favorites', songs: [{ id: 1, title: 'Song 1' }] },
    { id: 2, name: 'Road Trip', songs: [] },
  ]);

  const [bool_playlist, set_bool_playlist] = useState(false);

  function handleDeletePlaylist(playlistIdToDelete) {
    const updatedPlaylists = playlists.filter(playlist => playlist.id !== playlistIdToDelete);
    setPlaylists(updatedPlaylists);
  }

  function handleCreatePlaylist(playlistName) {
    const playlistExists = playlists.some(playlist => playlist.name === playlistName);
    let alert = false;
    if (!playlistExists) {
        const newPlaylist = { id: Date.now(), name: playlistName, songs: [] };
        setPlaylists([...playlists, newPlaylist]);
    } else {
        alert = true;
    }
    return alert;
  }

  return (
    <div className="App">
      <Header size={playlists.length} set_bool_playlist={set_bool_playlist} bool_playlist={bool_playlist}/>
      {!bool_playlist && <Songlist playlists={playlists} setPlaylists={setPlaylists} handleDeletePlaylist={handleDeletePlaylist} handleCreatePlaylist={handleCreatePlaylist}/>}
      {bool_playlist && <Playlist playlists={playlists} handleDeletePlaylist={handleDeletePlaylist} handleCreatePlaylist={handleCreatePlaylist} alert={alert}/> }
    </div>
  );
}

export default Home;
