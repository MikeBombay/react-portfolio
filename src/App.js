import logo from './logo.svg';
import './App.css';

import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
      <div className="App">
          <div className="wrapper">
            {/* <NavBar /> */}
            <Projects />
            <About />
            <Resume />
            <Contact />
          </div>
      </div>
  );
}

export default App;


