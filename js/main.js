// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQDvyq2qpytHE7KC_1NIAX3dtRGyVMF3zgOgmZYEu3mJZeKSsIdO6Kw_YmWxraW5ACuU90ANZ1fXHQwjhyN-3a94UAYNj6mhAVuwZ1AQibrHceE4Z803LJXrajbQsRfxfRDbyzoNspp6aJkPQ83NXSle9thrl0cRx_fdVzTiXUtUCxOewQGn-9V_zjUpz_jS4ygiq1su6S1jrnG0mSLvNAIUdVfTaV3Zf6yCS7zIgTsIFcf7yzTG28k4NNqLRyT8trZScuBLBFwyIhJCmOerFBws';
async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
        method,
        body:JSON.stringify(body)
    });
    return await res.json();
}

async function getTopTracks(){
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    return (await fetchWebApi(
        'v1/me/top/tracks?time_range=long_term&limit=10', 'GET'
    )).items;
}

const topTracks = await getTopTracks();
console.log('topTracks', topTracks);
console.log(
    topTracks?.map(
        ({name, artists}) =>
        `${name} by ${artists.map(artist => artist.name).join(', ')}`
        )
);