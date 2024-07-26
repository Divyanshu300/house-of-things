import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header.jsx';
import Home from './pages/Home.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Footer from './components/common/Footer.jsx';
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
        {/* <Login/> */}
        {/* <Signup/> */}
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;