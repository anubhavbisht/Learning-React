const reactHeading = React.createElement("h3", {
    id: 'heading'
}, "Hello World!(REACT code)");
console.log(typeof reactHeading) //object
console.log(reactHeading)
const reactRoot = ReactDOM.createRoot(document.getElementById("react-root-app"));
reactRoot.render(reactHeading);
