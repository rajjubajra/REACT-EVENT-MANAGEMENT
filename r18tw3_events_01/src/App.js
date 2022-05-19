import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import EventBooking from './pages/EventBooking';



function App() {

  const [load,setLoad] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setLoad(true);
    },5000)
  },[])


  return (
    load &&
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page-one-n1" element={<Events />} />
          <Route path="/event-details/:nid" element={<EventDetails />} />
          <Route path="/event-booking/:nid" element={<EventBooking />} />
        </Routes>
      </Layout>
    </BrowserRouter>  
  );
}

export default App;
