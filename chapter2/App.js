import React from "react"
import ReactDOM from 'react-dom/client'

const reactHeading = React.createElement("h3", {}, "Hello World!(REACT code)");
const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"));
reactRoot.render(reactHeading);
