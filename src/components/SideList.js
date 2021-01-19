import React from 'react'
import "../App.scss";
import classes from "./sample.module.css"

const gclr = 'greenFont';
const dottedborder = {border: "red 2px dotted"}
const jill =[];
// jill.push(gclr);
// jill.push("pad");
jill.push("heading");
jill.push(classes.fontWt);


// jill.push(dottedborder);
function SideList(props) {
    return (
        <React.Fragment>
            <h3 style= {props.style} className={jill.join(' ')}>{props.name}</h3>
        </React.Fragment>
            
    )
}

export default SideList
