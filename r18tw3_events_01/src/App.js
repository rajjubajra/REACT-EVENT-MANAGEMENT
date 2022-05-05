import React from 'react';
import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Events from './pages/Events';




function App() {


  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page-one-n1" element={<Events />} />
          
        </Routes>

      </Layout>
    </BrowserRouter>  
  );
}

export default App;
