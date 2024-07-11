// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header.jsx';
import Home from './pages/Home.jsx';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import ProductList from './components/ProductList';
// import ProductDetails from './components/ProductDetails';

const App = () => {
  const products = [
    { id: 1, name: 'Luxury Sofa', price: '$2000', image: 'path/to/image', description: 'A luxurious sofa.' },
    { id: 2, name: 'Designer Lamp', price: '$500', image: 'path/to/image', description: 'A beautiful lamp.' },
    // Add more products as needed
  ];

  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">

        <Header className="fixed"/>
        <Home/>
        {/* <main className="flex-grow">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact render={() => <ProductList products={products} />} />
            <Route path="/products/:id" render={({ match }) => {
              const product = products.find(p => p.id === parseInt(match.params.id));
              return <ProductDetails product={product} />;
            }} />
          </Switch>
        </main> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
