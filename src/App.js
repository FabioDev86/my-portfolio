import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import Tools from './components/Tools';
import About from './components/About';
import Contact from './components/Contact';
import { LanguageProvider } from './contexts/LanguageProvider';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav /> 
      <Header />
      <Projects /> 
      <Tools />
      <About />
      <Contact /> 
      <Footer />   
    </div>
  );
}
function Root(){
  return(
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
}

export default Root;
