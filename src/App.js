import './App.css';
import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import SigleMovie from './pages/singleMovie';
import PersistentDrowerLeft from './PersistentDrawerLeft'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/single">
          <SigleMovie />
        </Route>
        <Route path="/">
          <PersistentDrowerLeft />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
