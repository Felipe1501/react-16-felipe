import React from 'react';
import ReactDOM from 'react-dom';

// import Primeiro from './components/Primeiro';
//import BomDia from './components/BomDia';
import Multi, {BoaNoite} from './components/Multiplos';
import Saudacao from './components/Saudacao';

const element = <h1>TESTANDO</h1>

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="Felipe" />
    </div>
    , document.getElementById('root'));
