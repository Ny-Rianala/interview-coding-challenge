import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Products from './Products';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;


// Other functions like editProduct, deleteProduct, and sendEmail can be added similarly