import React, { useState } from "react";
import Nav from "./Nav";


function Header(props) {
 

  return (
    <div>
    
          <Nav handlePageChange={props.handlePageChange}/>      
   
    </div>
  );
}
export default Header;