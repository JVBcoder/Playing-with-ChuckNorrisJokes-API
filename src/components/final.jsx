import React, { useState, useEffect } from 'react';
import { getJoke } from '../services/axiosService'; 
import chuck from '../chuck.png'
import wait from '../chuckwait.png'
import { Button, Typography } from '@mui/material' 
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>

const Principal = () => {

    const [chiste, setChiste] = useState(null);
    const [statebup, setStatebup] = useState(true);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [statebdown, setStatebdown] = useState(false);

    useEffect(() => {
        getJoke()
        .then((response) =>  {setChiste(response.data)})
        .catch((error) => {alert(`Chuck is angry, something bad happens: ${error}`)})
    }, []);

    const newJoke = () => {
        getJoke()
        .then((response) =>  {setChiste(response.data) })
        .catch((error) => {alert(`Chuck is angry, something bad happens: ${error}`)})
        setStatebup(true)
        setStatebdown(false)
    }

   const sumaLike = () => {
    setLikes(likes+1);
    setStatebdown(true)
    setStatebup(false)
   }

   const sumaDislike = () => {
    setDislikes(dislikes+1);
    setStatebdown(true)
    setStatebup(false)
   }



    return (
        <div>
            { (statebup) 
            ? <img alt='icono'src={wait} height='300' ></img>
            : <img alt='icono'src={chuck} height='300' ></img>
            }
            <div><Typography variant="h3">A new joke by Chuck Norris</Typography></div>
            <div>
            { (chiste != null)
            ? <div>
            <Typography variant='body1'>{chiste.value}</Typography>
            </div>
            : <p></p>}
            <div><Button disabled={statebup} variant='contained' size='large' onClick={newJoke}>I want a new Joke</Button></div>
            <div>
            { (statebup) 
            ? <Typography variant="h6">Now vote the joke or be punished by Chuck</Typography>
            : <p><Typography variant="h6">Chuck asks you for another joke. Don't make him wait.</Typography></p>
            }
            </div>
            <div>
            <Button onClick={sumaLike} disabled={statebdown} variant='contained' color='success' startIcon={likes}>  LIKE</Button><Button onClick={sumaDislike} disabled={statebdown} variant='contained' color='error' startIcon={dislikes}> DISLIKE</Button>         
        </div>
            </div>
        </div>
    );
}

export default Principal;
