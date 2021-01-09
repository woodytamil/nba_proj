import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link, Switch} from 'react-router-dom'
//component
import Routes from './routes'

const App = () =>{
   return(
     <BrowserRouter>
      <Routes/>
     </BrowserRouter>
    
   )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

