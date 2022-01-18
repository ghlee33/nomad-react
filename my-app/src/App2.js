import { useState, useEffect } from "react";

function Hello() {
    /*
    useEffect(() => {
        console.log("created :)");
        return () => console.log("destoryed :(");   // clean up function
    }, []);
    */
   /*
    function createFn() {
        console.log("created :)");
        return destroyedFn;
    }
    function destroyedFn() {
        console.log("destoryed :(");
    }
    useEffect(createFn, []);
    */
    useEffect(() => {
        console.log("hi :)");
        return() => console.log("Bye :(");
    });
    return <h1>Hello</h1>;
}

function App() {
    const [ showing, setShowing ] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            <button
                onClick={onClick}
                >
                {showing ? "Hide" : "Show"}
            </button>
            {showing ? <Hello /> : null}
        </div>
    );
}

export default App;
