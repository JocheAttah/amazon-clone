import axios from "axios";


const instance = axios.create({
   baseURL: 'https://us-central1-clone-8a53f.cloudfunctions.net/api'
   
//    "http://localhost:5001/clone-8a53f/us-central1/api" //the API url cloud function
});


export default instance;

// https://us-central1-clone-8a53f.cloudfunctions.net/api