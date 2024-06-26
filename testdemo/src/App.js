import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
function App() {
  return (
   <>
    <Navbar/>
    <Alert/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
