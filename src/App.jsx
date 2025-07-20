import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Footer from './Components/Footer';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/footer" element={<Footer />} /> 
      
      {/* Add more routes as needed */}
    </Routes>
    </BrowserRouter>

  )
}

export default App