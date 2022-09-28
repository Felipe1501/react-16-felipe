import React from 'react';
import ReactDOM from 'react-dom';

import Primeiro from './components/Primeiro';
import BomDia from './components/BomDia';
import Multi, {BoaNoite} from './components/Multiplos';

const element = <h1>TESTANDO</h1>

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Felipe" />
        <BoaNoite nome="Bia" />
    </div>
    , document.getElementById('root'));
