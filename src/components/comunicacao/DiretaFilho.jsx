import React from "react";

export default props =>{
    return (
        <div>
            <h2>Filho</h2>
            <div>
                <span>{props.nome}</span>
                <span> {props.idade}</span>
            </div>
        </div>
    )
}