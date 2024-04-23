import { Link } from "react-router-dom";


function Nav() {
 return (
   <nav className="nav nav-tabs mb-2">
     <Link className="nav-link" to="/Labs/a3/index.js">
       A3</Link>
     <Link className="nav-link" to="/Labs/a4/index.js">
       A4</Link>
     <Link className="nav-link" to="/hello">
       Hello</Link>
     <Link className="nav-link" to="/Kanbas">
       Kanbas</Link>
   </nav>
 );
}


export default Nav;
