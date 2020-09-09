import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from '../src/pages/Home';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';


const Pagina404 = () => (
  window.location.href="https://gamebruxinha.netlify.app"
  )
   

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Index} exact/>
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/cadastro/categoria" component={CadastroCategoria} />
    <Route component={Pagina404} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);



