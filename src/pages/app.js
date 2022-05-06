import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Button, Container } from "@mui/material";
import Layout from "../components/Layout";
import BlogPage from "./blog/index";
import Login from "./login";
import IndexPage from "./index";
import PrivateRoute from "../components/privateRoute";
import { navigate } from "gatsby";

const LoggedIn = () => {
  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      //fetch call to api/logout
      const data = await fetch(
        `/api/logout?token=${window.localStorage["google:tokens"]}`,
        { method: "POST" }
      );
      window.localStorage.removeItem("google:tokens");
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <Container>
      <Button onClick={handleLogout}>Log Out</Button>
    </Container>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <PrivateRoute path="/app" component={LoggedIn} />
      </Router>
    </>
  );
};

export default App;
