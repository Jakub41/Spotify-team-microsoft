<< << << < HEAD
window.onload = () => {
        const baseUrl = "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem" // Base url from the api.
        const headers = {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "754e922385mshd4812ea71897f5bp1dd298jsnd9443513a1ec"
        };
        fetch(baseUrl, {
                method: "GET",
                headers
            })
            .then(respons => respons.json())
            .then(tracks => console.log(tracks)) ===
            === =
            window.onload = event => {
                const baseUrl = "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem"; // Base url from the api.
                // Headers Authentications to API request
                const headers = {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com", // Host identify the API 
                    "x-rapidapi-key": "754e922385mshd4812ea71897f5bp1dd298jsnd9443513a1ec" // Kay to access the API data
                };
                // We fecth the data passing the prams URL, Method (Always required), headers (optional or required)
                fetch(baseUrl, {
                        method: "GET",
                        headers
                    }) // Asking for the data from API
                    // Wait the response for a JSON OBJ 
                    .then(response => response.json()) // Waiting and asking for an answer as to be in JSON
                    // Take the data which we can use 
                    .then(tracks => {
                        // Wec all the new function and pass as params the data tracks
                        showAllTracks(tracks);
                    });
            };

        // Show all tracks in a table
        const showAllTracks = listALLTracks => {
            console.log(listALLTracks);
            // Variable as an index for starting our HTML output
            let out = ``;
            out += `<table> 
                <thead>
                    <tr>
                        <th>Song</th>
                        <th>Album</th>
                        <th>Duration</th>
                        <th>Album ART</th>
                    </tr>
                </thead>`;
            // We gonna to loop our data and generate our table
            // The API we use has a bit of nesting inside the JSON OBJ
            // From API we have data [{ ... }]
            listALLTracks.data.forEach(track => {
                // Template literal to create our HTML schema where to put our data
                // Created for how many data long we have from API == 300
                // Use literal template to access the right data like data.title or data.album.tile 
                out +=
                    `<tbody>
            <tr>
                <td>${track.title}</td>
                <td>${track.album.title}</td>
                <td>${track.duration}</td>
                <td>
                    <img src="${track.album.cover_small}" alt="...">
                </td>
             </tr>
        </tbody>`;
            });

            out += `</table>`;

            // We are selecting where we want to show the table
            let showResult = document.querySelector("#showResults");

            // We want to attach the table to the section showResults
            showResult.innerHTML = out; >>>
            >>> > 16 a769ffd4bd44ba75634e632763e656a881b7e8
        }