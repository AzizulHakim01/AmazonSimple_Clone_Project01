import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/checkout' element={<Checkout />}/>
                <Route path='/login' element={<Login />}/>
            </Routes>
            
        </BrowserRouter>
    );
}

export default App;
