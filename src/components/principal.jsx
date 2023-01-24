import React, { useState, useEffect } from 'react';
import { getJoke } from '../services/axiosService'; 
import chuck from '../chuck.png'
import Botones from './botones';
import { Button } from '@mui/material' 

const Principal = () => {

    const [chiste, setChiste] = useState(null);
    const [estado, setstate] = useState(false);

    useEffect(() => {
        getJoke()
        .then((response) =>  {setChiste(response.data)})
        .catch((error) => {alert(`Chuck is angry, something bad happens: ${error}`)})
    }, []);

    const newJoke = () => {
        getJoke()
        .then((response) =>  {setChiste(response.data) 
            setstate(true)})
        .catch((error) => {alert(`Chuck is angry, something bad happens: ${error}`)})
        
    }

    return (
        <div>
            <img alt='icono'src={chuck} height='300' ></img>
            <div><Button variant='contained' size='large' onClick={newJoke}>I want a new Joke</Button></div>
            <div>
            { (chiste != null)
            ? <div>
            <p>{chiste.value}</p>
            </div>
            : <p></p>}
            <div><Botones estado={estado}></Botones></div>
            </div>
        </div>
    );
}

export default Principal;
