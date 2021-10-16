import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [currentPage, handlePageChange] = useState("About");
  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    // YOUR CODE HERE
    //
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };  
  
  const handleNavClick = (page) => {
    handlePageChange(page)
   }

  return (
      <div>
      <Header handlePageChange={handlePageChange}/>
      {
        // Render the component returned by 'renderPage()'
        // YOUR CODE HERE
        //
        renderPage()
      }
      <Footer/>
      </div>
  );
}

export default App;