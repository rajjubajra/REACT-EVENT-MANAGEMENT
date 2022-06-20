import React,{useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import NavContainer from './NavContainer';

function NavRemote() {

  const {eventmenu} = useSelector(state => state.event_menu);
  console.log(eventmenu);

  /** Main Menu Array and SubMenu Array */
  const [main, setMain] = useState([]);
  const [sub, setSub] = useState([]);

  useEffect(()=>{
    const arr1 = [];
    const arr2 = [];
    eventmenu?.map(item => {
    const {enabled, parent, title, url, weight} = item.attributes;
    return !parent && enabled
        ? arr1.push({
          "id": item.id,
          "title": title,
          "url": url,
          "weight": weight
        }) 
        : arr2.push({
          "id": item.id,  
          "title": title,
          "url": url,
          "parent": parent,
          "weight": weight
      })  
    }) 

    setMain(arr1);
    setSub(arr2);

  },[eventmenu])

 console.log("main",main, "sub", sub);

  return (
    <div>
      <NavContainer main={main} sub={sub} />
    </div>
  )
}

export default NavRemote
