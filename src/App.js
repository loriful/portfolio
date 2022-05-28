import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  const [contactSelected, setContactSelected] = useState(false);

  return (
  
    <div>
      <header>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      </header>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Portfolio></Portfolio>
            <Resume></Resume>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
          
      </main>
      <footer>
            <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
