import './App.css';
import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Movies from './pages/movies';
import SigleMovie from './pages/singleMovie';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/single">
          <SigleMovie />
        </Route>
        <Route path="/">
          <Movies />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
