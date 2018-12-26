
// import {  } from "../../public/data.json";
import axios from 'axios';
export   const getData =  () => {
    return  new  Promise  ((resolve, reject) => {
        axios.get('/data.json')
        .then(function (response) {
            console.log(11)
            resolve(response);
        })
        .catch(function (error) {
            reject(error);
        });
    })
    
}