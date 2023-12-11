import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Log from './components/Login/Log';
import Account from './components/Account/Account';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Services from './components/Services/Services';
import Shop from './components/Shop/Shop';
import Contact from './components/Contact/Contact';
import Nav from './components/Navbar/Nav';
import Slider from './components/Slider/Slider';
import Verification from './components/Verification/Verification';
import Box from './components/Box/Box';
import Center from './components/Center/Center';



function App() {
  return (
    <div className="App">
     
         <BrowserRouter>
        
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/About'/>
        <Route element={<Shop/>} path='/Shop'/>
        <Route element={<Services/>} path='Services'/>
        <Route element={<Contact/>} path='/Contact'/>
        <Route element={<Log/>} path='/Contact'/>
        <Route element={<Account/>} path='/account'/>
        <Route element={<Nav/>} path='/nav'/>
        <Route element={<Slider/>} path='/slider'/>
        <Route element={<Log/>} path='/log'/>
        <Route element={<Verification/>} path='/verification'/>
        <Route element={<Box/>} path='/box'/>
        <Route element={<Center/>} path='/center'/>
        
        
       
       
       
      </Routes>
    </BrowserRouter>
    <Footer/>
   

    
    </div>
  );
}

export default App;
