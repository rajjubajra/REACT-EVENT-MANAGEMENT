import React,{useEffect, useState} from 'react';
import NavContainer from './NavContainer';
import eventmenu from './mainnav.json';


console.log(eventmenu);

function NavLocal() {
  /** Main Menu Array and SubMenu Array */
  const [main, setMain] = useState([]);
  const [sub, setSub] = useState([]);

  useEffect(()=>{
    const arr1 = [];
    const arr2 = [];
    eventmenu?.data?.map(item => {
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

  },[])

 console.log("main",main, "sub", sub);



  return (
    <div>
      <NavContainer main={main} sub={sub} />
    </div>
  )
}

export default NavLocal