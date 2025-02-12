import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {Container } from 'react-bootstrap'
import Chat from 'chat/Chat'
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => (
    <container>
        <p><strong>Chat-mate</strong></p>
        <div><Chat/></div>
        <p>Terms & Condition</p>
    </container>
)

ReactDOM.render(<App />, document.getElementById("app"));
