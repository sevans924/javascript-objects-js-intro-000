var playlist = { Adele: 'Hello'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artisitName){
  delete playlist[artistName];

  return playlist
}
