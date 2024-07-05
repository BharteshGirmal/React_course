
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alerts from './Components/Alerts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {

  const [mode, setMode]= useState('light');
  const [alert, setAlert]= useState(null);

  const showAlert= (message, type)=>{
    setAlert({
      message:message,
      type:type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const removeClasses = () =>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-info');
  }
  const togglemode = (cls)=>{
    removeClasses();
    document.body.classList.add('bg-'+cls);
    console.log(cls);
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor="#2c267c";
      showAlert("Dark Mode has been enabled", "success");
    }else{
      setMode ('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been enabled", "success");

    }
  }
  return (
    <>
    <Router>
        <Navbar mode={mode} togglemode={togglemode}/>
        <Alerts alert={alert}/>
        <div className="container my-3">
          
        <switch>
          <Routes>
            <Route path="/" element={<TextForm heading="Enter the text to analyze here" mode={mode} showAlert={showAlert}/>} />
          </Routes>
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </switch>
        </div>
      </Router>
    </>
  );
}

export default App;

