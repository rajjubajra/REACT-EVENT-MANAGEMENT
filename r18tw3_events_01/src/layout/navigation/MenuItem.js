
import {Link} from 'react-router-dom';

function MenuItem({title, url}) {
  
//console.log(url.replace("/yw-d9",""));
  
  return (
    <Link to={url.replace("/yw-d9","")}>{title}</Link> 
  )
}

export default MenuItem
