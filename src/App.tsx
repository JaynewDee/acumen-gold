import { createRef, useEffect, useState } from "react";
import "./App.css";

import { AccoladeBox as Container } from "./components/AccoladeBox";
import { ClickHandler, KeyHandler } from "./components/utils/events";

// Badges
// Certificates
// Certifications
// Honorable Mentions?
// Skills?

const App: React.FC = () => {
  const [displayState, setDisplayState] = useState("");

  /* 
    - The state here at the highest level of our application will store
      navigation details that will be lifted from the CatNav component.
    - Lifting the state is a technique that will allow our child components,
      like buttons for controlling the display, to change the global settings
      of our application

      === https://reactjs.org/docs/lifting-state-up.html ===

    - We will pass the state setter / useState callback, into the CatNav.tsx component
      as a prop, and within the component we will implement a handler that changes the display
      state on click using the setter that was passed down into the component.
    - Use of the callback in the child component will change the state in this component,
      and this component will include a display switch that renders the respective Accolade category
    - This state variable will also determine the style of the nav buttons, depending
      on which category/categories are -> active: true || active: false
  */

  useEffect(() => {
    const focusHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
      KeyHandler(e);
    };
    document.addEventListener("keydown", KeyHandler);
    document.addEventListener("click", ClickHandler);
    document.addEventListener("focus", focusHandler);

    return () => {
      document.removeEventListener("keydown", KeyHandler);
      document.removeEventListener("click", ClickHandler);
      document.removeEventListener("focus", focusHandler);
    };
  }, []);
  useEffect(() => {}, []);
  return (
    <div className="App">
      <Container
        displayState={displayState}
        setDisplayState={setDisplayState}
      />
    </div>
  );
};

export default App;
