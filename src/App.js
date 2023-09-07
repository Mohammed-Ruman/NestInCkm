
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Blog from './components/Blog'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  


  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
        </Routes>
      <Footer />
    </BrowserRouter>
    </>
    
  );
}

export default App;
