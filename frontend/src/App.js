/* eslint-disable */
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ChatContainer from "./pages/ChatContainer";
import CreateProfile from "./pages/CreateProfile";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { api } from "./api";
import Navbar from "./components/Navbar";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      const params = {
        user_id: cookies["UserId"],
        requested_id: cookies["UserId"],
      };
      if (!params.user_id) {
        return;
      }
      const data = await api.getSelf(params);

      if (isSubscribed) {
        setUser(data.data);
      }
    };
    fetchData().catch(console.error);

    return () => (isSubscribed = false);
  }, [cookies["UserId"]]);

  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<><Navbar user={user}/><Login /></>} />
        <Route path="/signup" element={<><Navbar user={user}/><Signup /></>} />
        <Route path="/" element={<><Navbar user={user}/><Home /></>} />
        <Route path="/chat" element={<><Navbar user={user}/><ChatContainer /></>} />
        <Route path="/createprofile" element={<><CreateProfile /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
