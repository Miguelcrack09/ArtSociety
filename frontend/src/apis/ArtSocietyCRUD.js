import axios from "axios";

export function searchGenero(genero, callback){
    axios.get("http://localhost:5000/obras/search/"+genero)
    .then((res)=>{
        callback(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}

export function searchObras(User, callback){
    axios.get("http://localhost:5000/obras/searchs/"+User)
    .then((res) =>{
        callback(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}

export function addArtist(artist, callback){
    axios.post("http://localhost:5000/users/UserID/"+artist.id, artist)
    .then((res)=>{
      callback(res.data);
    })
    .catch((err)=>{
      callback(err);
    })
  }

  export function getObras(callback){
    axios.get("http://localhost:5000/obras")
    .then((res)=>{
        callback(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}

export function getObra(id, callback){
    axios.get("http://localhost:5000/obras/"+id)
    .then((res)=>{
        callback(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}

export function updateUsersPartial(User, callback){
    axios.patch("http://localhost:5000/users/"+User.id, User)
    .then((res)=>{
        callback(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}

export function deleteObra(id, callback){
    axios.delete("http://localhost:5000/obras/"+id)
    .then((res)=>{
        callback(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}

export function addObra(Obra, callback){
    axios.post("http://localhost:5000/obras",Obra)
    .then((res)=>{
      callback(res.data);
    })
    .catch((err)=>{
      callback(err);
    })
  }