import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import ButtonGroup from 'react-bootstrap/ButtonGroup';
 import Container from 'react-bootstrap/Container';
import Home from './Components/Pages/Home';
import Houses from './Components/Pages/Houses';
import About from './Components/Pages/About';
import Footer from './Components/Footer';
import './App.css'

function App() {
  return (
      <Container>
      <Router>
       <div>
        <h2>Vacay Homes</h2>
         <nav>
         <ButtonGroup>
               <Link to="/" className="btn btn-outline-secondary">
                 Home
               </Link>
               <Link to="/about" className="btn btn-outline-secondary">
                 About
               </Link>
               <Link to="/houses" className="btn btn-outline-secondary">
                 Houses for Rent
               </Link>
             </ButtonGroup>
           </nav>
  
           <Switch>
             <Route path="/houses">
                  <Houses />
             </Route>
             <Route path="/about">
               <About />
             </Route>
             <Route path="/">
             <Home /> 
             </Route>
           </Switch>
         </div>
         <Footer />
       </Router>
     </Container>
    
   );
  }
  
  export default App;