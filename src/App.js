import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Blog from './components/Blog';
import Contact from './components/Contact';

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

export default App;
