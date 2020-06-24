import React from 'react'

function DropDownList(props){
    return(props.fruits.map((fruit)=> (<option value={fruit}>{fruit}</option>)));
}

export default DropDownList