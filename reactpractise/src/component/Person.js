import React from "react";

function person (props){
    return(
        <p>my name is {props.name} and am {Math.floor(Math.random()*50)} years Old</p>
    )
}

export default person;