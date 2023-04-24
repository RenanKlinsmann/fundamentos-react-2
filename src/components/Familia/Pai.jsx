import React from "react";
import Filho from "./Filho";

export default props => {
    return (
        <div>
            <Filho nome="Roberto" sobrenome={props.sobrenome}/>
            <Filho nome="Igor" {...props}/>
            <Filho nome="Ítalo" sobrenome="Dantas"/>
        </div>
    )
}