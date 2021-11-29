import axios from "axios";

export function searchGenero(genero, callback){
    axios.get("http://localhost:5000/obras/search/"+genero)
    .then((res)=>{
        callback(res);
    })
    .catch((err)=>{
        console.log(err);
    })
}