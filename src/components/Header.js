import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="container" style={{  height: "7rem"  }}>

      <div class="container2">

      
      <Link class="navbar-R" href="#" to="/"> 
       <img src={require ('../assets/img/logoCradaChill.png')} alt="" width="450"/>
       </Link>
       
      
    
    
      <a class="navbar-L" href="#">
        <img src={require ('../assets/img/palomitas.png')} alt=""  width="50" />
      </a>

      </div> 
     
    </nav>
  );
};

export default Header;
