import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './components/Navbar'; 
import Podcast from './components/Podcast';
import Login from'./components/Login';
import Home from "./components/Home";
import Upload from "./components/Upload";
import Register from "./components/Register";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/upload" element={<Upload/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>

        
        
    </Router>

  
  );
};

export default App

ReactDOM.render(<App />, document.getElementById('root'));
