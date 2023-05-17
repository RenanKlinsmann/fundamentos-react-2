import "./Contador.css";
import React, {Component} from "react";
import Display from "./Display";
import Botoes from "./Botoes";
import FormInput from "./FormInput";

class Contador extends Component {

    state = {
        numero: this.props.numero || 0,
        passo: this.props.passo || 5,
    }

    /*constructor(props){
        super(props)
        this.state = {numero: this.props.numero}
    }*/

    /*constructor(props){
        super(props)
        this.inc = this.inc.bind(this)
    }*/

    inc = () =>{
            this.setState({
                numero: this.state.numero + this.state.passo,
            })
        }

    dec = () =>{
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }


    render(){
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}/>
                <FormInput passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes onInc={this.inc} onDec={this.dec}/>
            </div>
        );
    }
}

export default Contador;