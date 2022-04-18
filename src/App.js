import React, { useState } from 'react';
import Nav from './components/Navigation';
import About from './components/About';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'about', description: 'about me',
    },
    { name: 'portfolio', description: 'Hover over my projects to see what I have been working on' },
    { name: 'contact', description: 'contact me using the form below -- all fields are required.' },
    { name: 'resume', description: 'view my resume and check out my front and back-end proficiencies' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;