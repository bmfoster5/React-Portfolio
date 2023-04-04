import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio'
import Resume from './components/Resume';
// import ReactPortfolio from './components/ReactPortfolio';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Contact></Contact>
      <Projects>
      <div>
          <h1>ScoreSocial</h1>
          <a href="https://mighty-cliffs-23244.herokuapp.com/">View my portfolio</a>
        </div>
      </Projects>
      <Portfolio></Portfolio>
      <Resume></Resume>
      <Footer></Footer>

    </div>
  );
}

export default App;
