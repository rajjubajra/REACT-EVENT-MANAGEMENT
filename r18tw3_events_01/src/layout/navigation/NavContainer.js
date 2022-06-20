import React,{ useState } from 'react';
import MenuItem from './MenuItem';
import SubMenuItem from './SubMenuItem';
import IconHome from '../../component/IconHome';

function NavContainer({main, sub}) {

  /** set "id" of the mouseover item */
  /** "id" is same to the "parent" value of the subment */
  const [subView,setSubView] = useState('');

  //console.log(subView);

  return (
    <div className="w-full flex justify-center"> 
        <ul className="relatvie flex font-thin text-sm tracking-wide py-4">
          <li className="m-3"><IconHome /></li>
        {
          main?.map((item, i)=>{
            return <li key={i}
            className="m-3" 
            onMouseOver={()=> setSubView(item.id)}
            onMouseLeave={()=> setSubView('')}>
              <MenuItem title={item.title} url={item.url} />
              <ul className="absolute">
              { sub?.map((elm, si)=> {
                return item.id === elm.parent &&
                  <li key={si} className={elm.parent === subView ? 'my-2 z-50' : 'hidden' }>
                    <SubMenuItem title={elm.title} url={elm.url} />
                  </li>
              })}
              </ul>
            </li>
          })
        }
        </ul> 

    </div>
  )
}

export default NavContainer