import React from "react";
import "../App.scss";
import classes from "./sample.module.css";

const gclr = "greenFont";
const dottedborder = { border: "red 2px dotted" };
const jill = [];
jill.push(gclr);
jill.push("pad");
jill.push("heading");
jill.push(classes.fontWt);

// jill.push(dottedborder);
function SideList(props) {
  return (
    <React.Fragment>
      {!props.isEditable ? (
        <h3 index={props.index} onDoubleClick={(event)=>props.ondblClickHandler(event, props.index)} style={props.style} className={jill.join(" ")}>
          {props.name}...{props.index}
        </h3>
      ) : (
        <div>
          <input
            type="text"
            className={jill.join(" ")}
            defaultValue={props.name}
            onKeyPress={(e)=>props.onKeyPress(e, props.index, props.name)}
            index={props.index}
          />
          
        </div>
      )}

      <button name={props.name} onClick={props.removeItem}>
        remove
      </button>
      {/* <button name={props.name} i={props.index} onClick={props.ondblClick} >dbl click   {props.index}</button> */}
      <button name ={props.index} onClick={(event)=>props.ondblClickHandler(event, props.index)}>
        dbl click
      </button>
    </React.Fragment>
  );
}

export default SideList;
