import './App.css'
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Article from "./components/Article/Article";
// import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
      <div className="App">
        <Header/>
        {/*<Navbar/>*/}
        <Article/>
        <Footer/>
      </div>
  )
}

export default App
