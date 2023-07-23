import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App.js";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";

import storeInstance from "./Redux/Store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
