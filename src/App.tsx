// src/App.tsx
import React from "react";
import NavigationBar from "./components/Navbar";
import FollowMouse from "./components/FollowMouse";
import Hero from "./components/Hero";
import MainSection from "./components/MainSection";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ScrollProgressBar from './components/ScrollProgressBar';

const App: React.FC = () => {
  return (
    <div className="App">
      
      <header>
      <ScrollProgressBar />
        <NavigationBar />
      </header>
      <main>
      <FollowMouse />
        <Hero />
        <MainSection />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
