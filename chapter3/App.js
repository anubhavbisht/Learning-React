import React from "react"
import ReactDOM from 'react-dom/client'

const jsxHeading = <h3 className="hi">Hello World!(REACT code)</h3>
console.log(jsxHeading)

// react functional component
const HeadingComponent = () => {
    return <h1>Hello peeps</h1>
}
console.log(HeadingComponent)
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<HeadingComponent/>);
