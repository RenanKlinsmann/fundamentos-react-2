import React, {useState} from "react";

export default props =>{
    const [valor, setValue] = useState("Inicial");
    const valor2 = "Paraiba";
 
    function quandoMudar(e){
        setValue(e.target.value);
    }
    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <h2>{valor}</h2>
            <label htmlFor="">Controlado:</label>
            <input value={valor} onChange={quandoMudar} />
            <label htmlFor="">Não Controlado</label>
            <input id="n-controlado" value={undefined}/>
            <label htmlFor="">Read only</label>
            <input value={valor2} readOnly/>
        </div>
    )
}