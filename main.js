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
        .then(tracks => console.log(tracks))
}