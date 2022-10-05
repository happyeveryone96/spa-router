import React from "react";
import ReactDOM from "react-dom/client";
import About from "./pages/About";
import Root from "./pages/Root";
import GlobalStyle from "./styles/GlobalStyle";
import Router from "./router/Router";
import Route from "./router/Route";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  </React.StrictMode>
);
