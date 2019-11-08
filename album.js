// Base url from the api.
const baseUrl = "https://deezerdevs-deezer.p.rapidapi.com";
// Headers Authentications to API request
const headers = {
  "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com", // Host identify the API
  "x-rapidapi-key": "754e922385mshd4812ea71897f5bp1dd298jsnd9443513a1ec" // Kay to access the API data
};

window.onload = event => {
  const searchUrl = `${baseUrl}/search?q=eminem`;

  // We fetch the data passing the prams URL, Method (Always required), headers (optional or required)
  fetch(searchUrl, { method: "GET", headers }) // Asking for the data from API
    // Wait the response for a JSON OBJ
    .then(response => response.json()) // Waiting and asking for an answer as to be in JSON
    // Take the data which we can use
    .then(tracks => {
      // Wec all the new function and pass as params the data tracks
      showAllAlbums(tracks);
    })
    .catch(e => console.log("An error occurred", e)); // errors
};

// Show all albums in cards
const showAllAlbums = listALLAlbums => {
  console.log(listALLAlbums.data[0].album);
  let out = ``;
  out += ``;
  // We map and get into cards
  listALLAlbums.data.map(album => {
    out += `<div class="col-sm-6 col-md-3 col-lg-3 py-2">`;
    out += `    <div class="card h-100 d-flex flex-column">`;
    out += `        <a href="${baseUrl}/artist/${album.artist.id}">`;
    out += `        <img src="${album.album.cover_medium}" class="card-img-top" alt="${album.id}"></a>`;
    out += `        <div class="card-body">`;
    out += `            <h5 class="card-title">${album.album.title}</h5>`;
    out += `            <p class="card-text"><a href="${album.preview}">Songs</a></p>`;
    out += `        </div>`;
    out += `    </div>`;
    out += `</div>`;
  });

  out += ``;

  // We are selecting where we want to show the albums
  let showResult = document.querySelector("#artist-albums > .row");

  // We want to attach the cards to the section #artist-albums > .row
  showResult.innerHTML = out;
};

// Artist info
const artistInfo = showArtistInfo => {
  const urlArtist = `${baseUrl}/artist/13`;
  console.log(urlArtist);

  fetch(urlArtist, { method: "GET", headers })
    .then(response => response.json())
    .then(artist => {
      let artistInfo = `<h1>${artist.name}</h1>
                        <img src="${artist.picture_big}"> 
                        <a href="${artist.link}" target="_blank">Link</a>`;
      let artistSelector = document.querySelector(".header");
      artistSelector.innerHTML = artistInfo;
    })
    // Errors
    .catch(e => console.log("An error occurred", e));
};

artistInfo();
