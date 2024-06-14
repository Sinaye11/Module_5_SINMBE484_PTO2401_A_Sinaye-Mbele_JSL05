// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Hold", artist: "Blxckie", genre: "Afropop"},
    { title: "Love Yourz", artist: "J.Cole", genre: "Hip-Hop"},
    { title: "Khusela", artist: "Kabza De Small & Msaki", genre: "Amapiano"},
    { title: "Izenzo", artist: "Bassie & Aymos", genre: "Amapiano"},
    { title: "Meanwhile in Honeydew", artist: "A-Reece", genre: "Hip-Hop"}
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Amapiano",
    "Groot": "Hip-Hop",
};

// Function to generate personalized playlists for each Guardian
function generatePlaylist(guardians, songs) {
    return Object.keys(guardians).reduce((playlists, guardian) => { //Returning an array with keys of an object
        //Declaring variable
        const genre = guardians[guardian];
        const playlist = songs
            //Will filter for the genre
            .filter(song => song.genre === genre)
            //Changing every song object into string format so we can get the title and the artist
            .map(song => `${song.title} - ${song.artist}`);
        playlists[guardian] = playlist;
        return playlists;
    }, {});
}

//Function to create, append and show playlist on the webpage
function showPlaylists(playlists) {
    //This will link to our index.html page so that we can see the playlist on the webpage
    const playlistsDiv = document.getElementById("playlists"); 
    for (const guardian in playlists) { //For loop to iterate through the playlist
        const guardianPlaylist = playlists[guardian];
        const guardianDiv = document.createElement("div");
        guardianDiv.classList.add("playlist");
        
        //Creating h3 element to be stored in guardian heading, that have the name of the Guardians playlist
        const guardianHeading = document.createElement("h3");
        guardianHeading.textContent = `${guardian}'s Playlist:`;
        guardianDiv.appendChild(guardianHeading);
       
        //Creating an unordered list, then creates a list for each song then sets the relevant details for the song and then appends 
        const playlistList = document.createElement("ul");
        guardianPlaylist.forEach(song => {
            const listItem = document.createElement("li");
            listItem.textContent = song;
            playlistList.appendChild(listItem);
        });
        //Appends guardian div
        guardianDiv.appendChild(playlistList);
        //Appends playlist div
        playlistsDiv.appendChild(guardianDiv);
    }
}
// Generating the playlist
const playlists = generatePlaylist(guardians, songs);

// Display playlists
showPlaylists(playlists);