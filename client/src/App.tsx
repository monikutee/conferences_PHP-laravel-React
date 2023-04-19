import React from "react";
import Register from "./components/register";
import Login from "./components/login";

function App() {
    return (
        <div
            className="App
"
        >
            <h1>Authentication Demo</h1>
            <div>
                <Register />
            </div>
            <div>
                <Login />
            </div>
        </div>
    );
}

export default App;
