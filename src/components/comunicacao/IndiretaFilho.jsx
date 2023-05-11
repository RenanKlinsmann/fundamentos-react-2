import React from "react";

export default props => {
    const callBack = props.quandoClicar;
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50;
    const gerarBoolean = () => Math.random() > 0.5;
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ =>{callBack('Renan', gerarIdade, gerarBoolean)}}>
                Fornece Dados
            </button>
            
        </div>
    )
}