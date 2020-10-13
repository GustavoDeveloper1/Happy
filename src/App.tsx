import React from 'react';

import './styles/global.css';
import './styles/pages/page-landing.css';

import logoimg from './images/Logo.svg';


function App() {
  return (
    <div id="page-landing">
        <div className="content-wrapper">
          <img src={logoimg} alt="Happy"/>

          <main>
            <h1>Leve Felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia
de muitas crianças.</p>
          </main>

          <div className="location">
            <strong>Brasilia</strong>
            <span>Distrito Federal</span>
          </div>

          <a href="" className="enter-app">
            >
          </a>


        </div>
    </div>
  );
}

export default App;
