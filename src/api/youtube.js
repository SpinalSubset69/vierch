import axios from 'axios';

const KEY = "AIzaSyBwM2TX-HEvxgsw0_cPGlzcNAhwKoYoPx0"; //Capital 

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults:25,
        key: KEY
    }
});
