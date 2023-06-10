import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Registration from './components/Registration';
import Login from './components/Login';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';
import Home from './components/Home';
import "./App.css"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductsSection/>}/>
        <Route path="/registration" element={<RegistrationPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
