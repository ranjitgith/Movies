import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = ""
const header = {
    'Content-Type': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTU0NTY4NGM4MTE2YTUxN2I2MmUyZmM1YmQyZDNlMSIsInN1YiI6IjY2MjkwODk1NjNkOTM3MDE4Nzc2ZDEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BgkVgcTO6bNDRZFSVUT_bg02ZfMO3gali4b_oxishUQ',
};

export const fetchDataFromApi = async(url, params) =>{
    try {
       const res  = await axios.get("https://api.themoviedb.org/3" + url, {headers:header}, params ) 
       return res.data;

    } catch (err) {
                console.log(err)
                 return err;
    }
}





