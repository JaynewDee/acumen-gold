import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

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

/* To consider:
    - Project may be optimized for iframe-interpolation.
      User creates account.
      User uploads badges/certs/images to account.
      User uses URL of user's profile to iframe the page into user's portfolio.
*/
