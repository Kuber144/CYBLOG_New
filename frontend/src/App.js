import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ChatContainer from "./pages/ChatContainer";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { api } from "./api";

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatContainer user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
