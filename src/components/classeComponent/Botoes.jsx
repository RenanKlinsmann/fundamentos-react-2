import React from "react";

export default props =>{
    return (
        <React.Fragment>
            <button onClick={props.onInc}>+</button>
            <button onClick={props.onDec}>-</button>
        </React.Fragment>
    )
}