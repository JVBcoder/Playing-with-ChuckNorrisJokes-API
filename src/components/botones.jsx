import React, { useState } from 'react';
import { Button } from '@mui/material'

const Botones = ({estado}) => {
    
    
   const [likes, setLikes] = useState(0);
   const [dislikes, setDislikes] = useState(0);
   const [state, setstate] = useState(estado);

   const sumaLike = () => {
    setLikes(likes+1);
    setstate(true)
   }

   const sumaDislike = () => {
    setDislikes(dislikes+1);
    setstate(true)
   }


    return (
        <div>
            <Button onClick={sumaLike} disabled={state} variant='contained' color='success' startIcon={likes}>  LIKE</Button><Button onClick={sumaDislike} disabled={state} variant='contained' color='error' startIcon={dislikes}> DISLIKE</Button>         
        </div>
    );
}

export default Botones;
