import { useState, useEffect } from "react";

function App() {
    const [ toDo, setToDo ] = useState("");
    const [ toDos, setTodos ] = useState([]);
    const onChange = (e) => setToDo(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if(toDo === "") {
            return;
        }
        setTodos((currentArray) => [toDo, ...currentArray]);
        setToDo("");
    }
    return (
        <div>
            <h1>MY To Dos ({toDos.length})</h1>
            <form
                onSubmit={onSubmit}
            >
                <input 
                    onChange={onChange}
                    value={toDo} 
                    type="text" 
                    placeholder="Write your to do..."
                />
                <button type="submit">
                    Add To Do
                </button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    );
}

export default App;