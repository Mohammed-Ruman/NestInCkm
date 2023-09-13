
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Blog from './components/Blog'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Service from './components/Service';
import PremiumHS from './components/PremiumHS'
import BudgetHS from './components/BudgetHS'
import Resort from './components/Resort'
import Vehicle from './components/Vehicle'
import Propertypage from './components/Propertypage';

function App() {

  


  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/service' element={<Service />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/premiumhs' element={<PremiumHS />}></Route>
          <Route path='/budgeths' element={<BudgetHS />}></Route>
          <Route path='/resort' element={<Resort />}></Route>
          <Route path='/vehicle' element={<Vehicle />}></Route>
          <Route path="/premiumhs/property/:propertyId" element={<Propertypage />}></Route>
        </Routes>
      <Footer />
    </BrowserRouter>
    </>
    
  );
}

export default App;
