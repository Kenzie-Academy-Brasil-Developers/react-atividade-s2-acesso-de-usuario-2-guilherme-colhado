import './App.css';
import Navegacao from './components/Navegacao';
import Dados from './pages/dados';
import menbersDatabase from './database'
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Formulario from './components/Formulario';

function App() {
  const [menbers, setMenbers] = useState(menbersDatabase)
  console.log(menbers)
  return (
    <div className="App">
      <header className="App-header">
            
        <Switch>
          <Route exact path={'/'}>
            <Navegacao dados={menbers}/>
            <Formulario setMenbers={setMenbers} menbers={menbers}/>
          </Route>
          {menbers
          .filter(menber=>menber.type==='pf')
          .map(menber=>
            <Route key={menber.id} exact path={`/customer/:id`}>
              <Dados menber={menber}/>
            </Route>
          )}
          {menbers
          .filter(menber=>menber.type==='pj')
          .map(menber=>
            <Route key={menber.id} exact path={`/company/:id`}>
              <Dados menber={menber}/>
            </Route>
          )}
        </Switch>
      </header>
    </div>
  );
}

export default App;
