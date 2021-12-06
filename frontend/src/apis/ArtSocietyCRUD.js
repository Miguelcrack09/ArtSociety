import axios from "axios";
const baseUrl = "https://artsociety-backend-b13.herokuapp.com";

export function searchGenero(genero, callback){
    axios.get(baseUrl+"/obras/search/"+genero)
    .then((res)=>{
        callback(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}

export function searchObras(User, callback){
    axios.get(baseUrl+"/obras/searchs/"+User)
    .then((res) =>{
        callback(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}

export function addArtist(artist, callback){
    axios.post(baseUrl+"/users/UserID/"+artist.id, artist)
    .then((res)=>{
      callback(res.data);
    })
    .catch((err)=>{
      callback(err);
    })
  }

  export function getObras(callback){
    axios.get(baseUrl+"/obras")
    .then((res)=>{
        callback(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}

export function getObra(id, callback){
    axios.get(baseUrl+"/obras/"+id)
    .then((res)=>{
        callback(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}

export function updateUsersPartial(User, callback){
    axios.patch(baseUrl+"/users/"+User.id, User)
    .then((res)=>{
        callback(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}

export function deleteObra(id, callback){
    axios.delete(baseUrl+"/obras/"+id)
    .then((res)=>{
        callback(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}

export function addObra(Obra, callback){
    axios.post(baseUrl+"/obras",Obra.body)
    .then((res)=>{
      callback(res.data);
    })
    .catch((err)=>{
      callback(err);
    })
  }