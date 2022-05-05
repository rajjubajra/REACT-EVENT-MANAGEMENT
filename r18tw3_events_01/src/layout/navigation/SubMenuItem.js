import React from 'react';
import { Link } from 'react-router-dom';

function SubMenuItem({title,url}) {

  return (
      <Link 
        className="border border-1" 
        to={url.replace("/yw-d9","")}>
        {title}</Link>
  );

}

export default SubMenuItem