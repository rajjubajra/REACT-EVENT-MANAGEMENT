import React, {useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import Preview from './Preview';
import {useSelector, useDispatch} from 'react-redux';
import {actionEventMenu} from '../redux/evenmenuSlice';



function Layout({children}) {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(actionEventMenu());
  },[dispatch])

  
  const {fetched, loading} = useSelector(state => state.event_menu);
  console.log("PAGE LAYOUT",fetched, loading);


  return (
    <div className="w-full px-3">
      <div>
        <Header />
      </div>
      <div>
        {children}
      </div>
      <div>
        <Footer />
      </div>      
      <Preview />
    </div>
  )
}

export default Layout
