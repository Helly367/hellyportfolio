// App.jsx ou ton composant principal
import React from 'react';
import Profile from './components/Profile';
import QuiSuisJe from './components/QuiSuisJe';
import Services from './components/Services';
import Experiences from './components/Experiences';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div className="font-sans"> 
      <Header />
      <main>
        <Profile />
        <QuiSuisJe />
        <Services />
        <Experiences />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;