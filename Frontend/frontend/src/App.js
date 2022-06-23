
//import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ShowAccount from './components/ShowAccount';
import Router from './components/Router';
import AddAccount1 from './components/AddAccount1' ;

function App() {
  return (
    <div className="App">
      <Router/>
     <Routes>
     <Route path="/" element={<AddAccount1/>}/>
     <Route path="/showAccount" element={<ShowAccount/>}/>
     <Route path="/addAccount" element={<AddAccount1/>}/>
     
     </Routes>
    </div>
  );
}

export default App;

