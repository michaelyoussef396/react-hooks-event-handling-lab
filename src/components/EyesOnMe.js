// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
    function handlefocus(event){
        console.log('Good!')
    }

    function handleBlur() {
        console.log('Hey! Eyes on me!')
    }

    return (
        <button onFocus={handlefocus} onBlur={handleBlur}>Eyes on me</button>
    )
}

export default EyesOnMe;