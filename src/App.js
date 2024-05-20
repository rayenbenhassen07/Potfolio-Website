import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/navBar/navbar.js";
import Intro from "./components/intro/intro.js";
import Skills from "./components/skills/skills.js";
import Particles from './components/design/design.js';
import Works from './components/works/works.js';
import Client from './components/client/client.js';
import Contact from './components/contact/contact.js';
import Footer from './components/footer/footer.js';

function App() {
  return (
    <div className="App">
        
        < Navbar />
        
        < Intro />
        
        < Skills/>

        < Works/>

        < Client/>

        < Contact/>

        <Footer/>

        
    </div>
  );
}

export default App;
