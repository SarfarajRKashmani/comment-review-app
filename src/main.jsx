import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ReviewProvider } from "./context/ReviewContext";
import "./styles/review.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReviewProvider>
        <App />
      </ReviewProvider>
    </BrowserRouter>
  </React.StrictMode>
);