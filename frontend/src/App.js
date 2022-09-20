import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Home from './pages/Home';
import ChatContainer from './pages/ChatContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/chat" element={<ChatContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
