import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  // const [categories] = useState([ 
  //   {
  //     name: 'challenges',
  //     description: 'Solo projects',
  //   }
  // ]);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
  
    <div>
      <header>
      <Nav
        // categories={categories}
        // setCurrentCategory={setCurrentCategory}
        // currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      </header>
      <main>
        {!contactSelected ? (
          <>
            <Portfolio></Portfolio>
            <Resume></Resume>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
      </main>
      <footer>
          <>
            <Footer></Footer>
          </>
      </footer>
    </div>
  );
}

export default App;
