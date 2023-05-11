import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props =>{
    return (
        <div>
            Pai
            <DiretaFilho nome={"Aluno"} idade={20}/>
        </div>
    )
}