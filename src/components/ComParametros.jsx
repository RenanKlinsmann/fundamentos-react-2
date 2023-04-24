import React from "react";

export default (props) => {
    const situacao = props.nota < 6.0 ? "Reprovado" : "Aprovado";
    return (
        <div>
            <h2>{props.nome}</h2>
            <p>{props.nota}</p>
            <p>Situacao do Aluno: {situacao}</p>

        </div>
    )
}