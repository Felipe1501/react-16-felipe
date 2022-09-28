import React from 'react';
import ReactDOM from 'react-dom';

// import Primeiro from './components/Primeiro';
//import BomDia from './components/BomDia';
import Multi, {BoaNoite} from './components/Multiplos';
import Saudacao from './components/Saudacao';
import Pai from './components/Pai';

const element = <h1>TESTANDO</h1>

ReactDOM.render(
    <div>
        <Pai nome="Fernando" sobrenome="Santos"/>
    </div>
    , document.getElementById('root'));
