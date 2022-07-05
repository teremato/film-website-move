import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//data
import {dataSerials} from "./Data/dataSerials"
import {dataFilms} from "./Data/dataFilm"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App dataFilms={dataFilms} dataSerials={dataSerials}/>
);

