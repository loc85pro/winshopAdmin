import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import AdminPage from "./pages/Admin/Admin";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route path="/admin">
          <AdminPage></AdminPage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
