import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/* 
===
TYPESCRIPT:  
    - ../tsconfig.json currently set to 
      "strict": false,
      "allowJs": true
===
*/

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
