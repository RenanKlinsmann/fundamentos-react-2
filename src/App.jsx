import  './App.css'
import React from "react";
import Card from './layout/Card';
import Primeiro from './components/Primeiro';
import Fragment from './components/Fragment';
import ComParametros from './components/ComParametros';
import Pai from './components/Familia/Pai';
import PaiDois from './components/Familia/PaiDois';
import Filho from './components/Familia/Filho';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import Usuario from './components/condicional/Usuario';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/classeComponent/Contador';


export default () => (
    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className='Cards'>
            <Card titulo='#12 - Class Component' color='#ff6632'>
                <Contador numero={45}/>
            </Card>
            <Card titulo='#11 - Formulario controlado' color='#e7c33e'>
                <Input/>
            </Card>
            <Card titulo='#10 - Comunicação Indireta' color='#9b9edc'>
                <IndiretaPai/>
            </Card>
            <Card titulo='#09 - Comunicação Direta' color='#73416c'>
                <DiretaPai/>
            </Card>
            <Card titulo='#08 - Renderização condicional' color='#632f18'>
                <ParOuImpar numero={21}/>
                <Usuario usuario={{nome:"Renan"}}/>
            </Card>
            <Card titulo='#07 - Repetição Exercicio' color='#12274d'>
                <TabelaProdutos/>
            </Card>
            <Card titulo='#06 - Repetição' color='#857907'>
                <ListaAlunos/>
            </Card>
            <Card titulo='#05 - Componente Pai 2' color='#E35'>
                <PaiDois sobrenome="Uniesp">
                    <Filho nome="Roberto" />
                    <Filho nome="Igor" />
                    <Filho nome="Ítalo"/>
                </PaiDois>
            </Card>
            <Card titulo='#04 - Componente Pai e Filho' color='#E29'>
                <Pai sobrenome="Dantas"/>
            </Card>
            <Card titulo='#03 - Componente com parametros' color='#E99'>
                <ComParametros nome="Roberto" nota={5.9} />
            </Card>
            <Card titulo='#02 - React Fragment' color='#E97'>
                <Fragment/>
            </Card>
            <Card titulo='#01 - Primeiro' color='#E94'>
                <Primeiro/>
            </Card>
        </div>
    </div>
);