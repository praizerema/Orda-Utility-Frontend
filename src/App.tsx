import React from "react";
import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./features/store";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  // const isAuthenticated = useAuth();

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/"
            element={<Home />}
          />
          
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
