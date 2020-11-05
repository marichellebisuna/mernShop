import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homescreen from './screens/HomeScreen';
import Productscreen from './screens/ProductScreen';
import Cartscreen from './screens/CartScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={Homescreen} />
          <Route path='/product/:id' component={Productscreen} />
          <Route path='/cart/:id?' component={Cartscreen} />
        </Container>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
