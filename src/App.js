import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { LanguageProvider } from './contexts/LanguageProvider';

function App() {
  return (
    <div className="App">
      <Nav /> 
      <Header />
      <Projects /> 
      <Tools />
      <Blog />
      <Contact />    
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
