// import got from 'got';
const BASE_URL = 'https://api.themoviedb.org/3/movie/now_playing';
const API_KEY = '8a8c29dac37b52609b591ec676bdeba5';

async function fetchNowPlaying() {
    // const nowPlaying = await got.get(`${BASE_URL}`, {
    //     searchParams: new URLSearchParams([
    //         ["api_key", API_KEY],
    //         ["language", 'en-US'],
    //     ]),
    //     responseType: "json",
    // })

    // return nowPlaying

    return fetch(`${BASE_URL}?api_key=${API_KEY}`).then(res => res.json())
}

export { fetchNowPlaying } 