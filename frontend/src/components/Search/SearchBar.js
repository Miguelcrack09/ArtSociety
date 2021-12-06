import React from "react";
import { Dropdown } from "react-bootstrap";

const SearchBar = () => {
  const redirectUrl = "/ResultGenero";
  const setGeneroInlocalstorage = (Genero) => {
    localStorage.setItem('Genero', Genero);
  }
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        ¿Que genero Buscas <strong>Art</strong>?
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href={redirectUrl} onClick={()=> setGeneroInlocalstorage('anime')}>Anime</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={()=> setGeneroInlocalstorage('manga')}>Manga</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={()=> setGeneroInlocalstorage('urbano')}>Urbano</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={()=> setGeneroInlocalstorage('callejero')}>Callejero</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={()=> setGeneroInlocalstorage('fanart')}>Fanart</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SearchBar;