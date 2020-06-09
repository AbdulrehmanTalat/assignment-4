import React, { useState } from 'react';
import './room.css';

function Room() {
    // const state = useState(true);
    // console.log("state = ",state);
    let [isLit,setLit] = useState(false);
    
    let [temp,setTemp] = useState(22);
  
  return (
    <div className={`room ${isLit ? "Light" : "Dark"}`}>
      The room is {isLit? "Lit" : "Dark"}
      <br/>
      Temprature: {temp} Celcius
      <br/>
    <button onClick={() => setLit(true)}>Turn On Light</button>
    <button onClick={() => setLit(false)}>Turn off Light</button>
    <br/>
    <button onClick={ () => {
       
       setTemp(++temp);
    }

    }>+</button>
      <button onClick={ () => {
       
       setTemp(--temp);
   }

   }>-</button>
    </div>
  );
}

export default Room;
