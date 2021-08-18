import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from  'react-router-dom';
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import './App.scss';

class App extends React.Component
{
render(){
  return(
    <div>
        <Router>
    
                <Switch>
                    <Route exect path="/addproduct" component={ AddProductForm }></Route>
                    <Route path="/" component={ ProductList }></Route>
                </Switch>
            
        </Router>
    </div>
  );
}
    
}

export default App;
