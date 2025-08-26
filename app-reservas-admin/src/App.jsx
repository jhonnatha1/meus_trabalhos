import React, { useState } from "react";
import Login from "./components/Login";
import "./styles/admin.css";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, senha) => {
    if(email === "1" && senha === "2") {
      setUser({ email });
    } else {
      alert("Email ou senha incorretos!");
    }
  };

  return (
    <div className="App">
      {user ? (
        <Dashboard />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
// ✅ Export default