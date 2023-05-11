import React, {Component} from "react";

class Contador extends Component {

    state = {numero: this.props.numero}

    /*constructor(props){
        super(props)
        this.state = {numero: this.props.numero}
    }*/

    render(){
        return (
            <div>
                <h2>Contador</h2>
                <p>{this.state.numero}</p>
            </div>
        );
    }
}

export default Contador;