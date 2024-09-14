import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={< Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
