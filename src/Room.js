import React, { useState } from 'react';


function Room() {
    // const state = useState(true);
    // console.log("state = ",state);
    let [isLit,setLit] = useState(false);
    let [isAge,setAge] = useState(24);
  
  return (
    <div>
      This is room is {isLit? "Lit" : "Dark"}
      <br/>
      Age: {isAge}
      <br/>
    <button onClick={() => setLit(!isLit)}>Toggle Light</button>
    <br/>
    <button onClick={ () => {
        console.log("Increase Age");
        setAge(++isAge);
    }

    }>Increase Age</button>
    </div>
  );
}

export default Room;
