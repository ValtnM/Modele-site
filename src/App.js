import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
