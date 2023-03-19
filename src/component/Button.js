import React, { useState } from "react"

export default function Button(){

    

    let [current, setCurrent] = useState(0);

    //Whatever value is in current update by 1
    function updateSetCurrent(){

        setCurrent(current + 1);
    };

    return(
        <div>
            <h1>{current}</h1>
            <button onClick={updateSetCurrent}>Please click me!</button>
        </div>
    )
}