import {React, useState} from 'react';
import './Gallery.scss';
import { useEffect } from 'react';
import { Collection } from './Collection.jsx';

// export const Gallery = () =>{
//     const cats = [
//         { "name": "Керри  "},
//         { "name": "Саппорт"},
//         { "name": "Мидер  "},
//     ]

// const [collections, setCollections] = useState([]);
// useEffect(() =>{
//     fetch(``)
//     .then((res)=> res.json())
//     .then((json) => {
//         setCollections(json);

//     })
//     .catch((err)=>{
//         console.warn(err);
//         alert('ошибка')
//     });
//  []});}