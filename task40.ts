
function make_Album(artist: string, title: string, tracks?: number): any {
    const album: any = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.track = tracks;
    }

    return album;
}

// Create albums using the makeAlbum function
const album1 = make_Album("Artist 1", "Album Title 1");
const album2 = make_Album("Artist 2", "Album Title 2", 10);
const album3 = make_Album("Artist 3", "Album Title 3", 5);

// Print the album information
console.log(album1);
console.log(album2);
console.log(album3);
