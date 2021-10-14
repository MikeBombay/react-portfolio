import React from "react";

function Nav(props) {
    return (
     
  
      <nav>
          <ul>
          <li onClick={()=>props.handlePageChange("About")}>
                  about
                </li>
                <li onClick={()=>props.handlePageChange("Projects")}>
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