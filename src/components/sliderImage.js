import React from "react";
import Thor from '../assets/Thor1.jpeg';
import Thor1 from '../assets/Thor2.jpeg';
import Sif from '../assets/Sif1.jpeg';
import Sif1 from '../assets/sif2.jpeg';
import Thor_Sif from '../assets/Thornsif.jpeg';
import { useContext } from 'react';


export default [
    {
        title: 'Thor',
        description: 'This is my dog Thor!',
        urls: Thor,
    },
    {
        title: 'Sif',
        description: 'this is my dog sif connolly doing her job!',
        urls: Sif,
    },
    {
        title: 'Thor',
        description: 'This image of Thor works',
        urls: Thor1,
    },
    {
        title: 'Sif',
        description: 'This image of Sif works',
        urls: Sif1,
    },
    {
        title: 'Thor & Sif',
        description: 'This image of Thor and Sif works',
        urls: Thor_Sif,
    },

];
