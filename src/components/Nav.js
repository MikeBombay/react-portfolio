import React from "react";

function Nav(props) {
    return (
     
  
      <nav>
          <ul className="flex-row mobile-view">
          <li onClick={()=>props.handlePageChange("About")}>
                  about
                </li>
                <li onClick={()=>props.handlePageChange("Portfolio")}>
                  projects
                </li>
                <li onClick={()=>props.handlePageChange("Resume")}>
                  resume
                </li>
                <li onClick={()=>props.handlePageChange("Contact")}>
                  contact
                </li>
            
          </ul>
      </nav>

    );
  }


export default Nav;