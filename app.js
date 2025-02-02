


const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag"),
    ]),
]);

console.log(parent); // Changed Parent to parent

const root = ReactDOM.createRoot(document.getElementById("root")); // Changed CreateRoot to createRoot

root.render(parent);
