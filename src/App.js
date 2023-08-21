import React, { useState } from "react";
import "./styles.css";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  return (
    <div className="App">
      {!loggedInUser ? (
        <>
          <Registration />
          <Login onLogin={handleLogin} />
        </>
      ) : (
        <Profile user={loggedInUser} />
      )}
    </div>
  );
}

export default App;
