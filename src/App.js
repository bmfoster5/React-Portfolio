import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio'
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Contact></Contact>
      <Portfolio></Portfolio>
      <Resume></Resume>
      <Footer></Footer>

    </div>
  );
}

export default App;
