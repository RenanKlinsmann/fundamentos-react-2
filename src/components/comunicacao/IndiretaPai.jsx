import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {

    const [nome, setNome] = useState("?");
    const [idade, setIdade] = useState(0);
    const [estudante, setEstudante] = useState(false);

    function forneceDados(nomeP, idadeP, estudanteP){
        setNome(nomeP);
        setIdade(idadeP);
        setEstudante(estudanteP);
    }
    return (
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade}</span>
                <span> {estudante ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={forneceDados}/>
        </div>
    )
}