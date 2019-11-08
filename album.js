window.onload = event => {
  const baseUrl = "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem"; // Base url from the api.
  // Headers Authentications to API request
  const headers = {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com", // Host identify the API
    "x-rapidapi-key": "754e922385mshd4812ea71897f5bp1dd298jsnd9443513a1ec" // Kay to access the API data
  };
  // We fetch the data passing the prams URL, Method (Always required), headers (optional or required)
  fetch(baseUrl, { method: "GET", headers }) // Asking for the data from API
    // Wait the response for a JSON OBJ
    .then(response => response.json()) // Waiting and asking for an answer as to be in JSON
    // Take the data which we can use
    .then(tracks => {
      // Wec all the new function and pass as params the data tracks
      showAllAlbums(tracks);
    });
};

// Show all tracks in a table
const showAllAlbums = listALLAlbums => {
  console.log(listALLAlbums.data[0].album);
  let out = ``;
  out += ``;
  listALLAlbums.data[0].album.map(album => {
    out += `<div class="col-sm-6 col-md-4 py-2">`;
    out += `    <div class="card h-100 d-flex flex-column">`;
    
    out += `        <img src="${album.cover_medium}" class="card-img-top" alt="${album.id}">`;
    out += `        <div class="card-body">`;
    
    out += `            <h5 class="card-title">${album.title}</h5>`;
    out += `            <p class="card-text"><a href="${album.tracklist}">Songs</a></p>`;
    
    out += `        </div>`;
    out += `    </div>`;
    out += `</div>`;
  });

  out += ``;

  // We are selecting where we want to show the table
  let showResult = document.querySelector("#artist-albums > row");

  // We want to attach the table to the section showResults
  showResult.innerHTML = out;
};
