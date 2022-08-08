import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import Jordan from './pages/Productos/Jordan';
import Adidas from './pages/Productos/Adidas';
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='Home' element={<Home />}></Route>
        <Route exact path='Jordan' element={<Jordan />}></Route>
        <Route exact path='Adidas' element={<Adidas />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
