{
  /* <div id = "parent">
    <div id = "child">
        <h1 id = "heading">Hello Nested Child</h1>
        <h2 id = "sibling-heading">Hello I Am Sibling To Nested Child</h2>
    </div>
</div> */
}
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello Nested Child"
);
const siblingHeading = React.createElement(
  "h2",
  { id: "sibling-heading" },
  "Hello I Am Sibling To Nested Child"
);
const child = React.createElement("div", { id: "child" }, [
  heading,
  siblingHeading,
]);
const parent = React.createElement("div", { id: "parent" }, child);
const reactNewRoot = ReactDOM.createRoot(
  document.getElementById("react-root-nested")
);
reactNewRoot.render(parent);
