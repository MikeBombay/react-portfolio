import React, { useState } from "react";
import Nav from "./Nav";


function Header(props) {
 

  return (
    <header>
			<div>
				<h1>Mike Bombay</h1>
			</div>
			<div>
    
          <Nav handlePageChange={props.handlePageChange}/>      
   
    </div>
		</header>
    
  );
}
export default Header;