import React from 'react';
import './App.css';

function App() {
    var myStyle = {
        fontSize: 100,
        color: '#FF0000'
    }
    return (
        <div>
            <div>
                header
            </div>
            <div>
                Content!
                <p>this is content</p>
                <p data-myattribute="some value">This is my content</p>
                <h1>{1+1}</h1>
                <h1>{2 ? 'true': 'false'}</h1>
                <div h1 style={myStyle}>Header</div>
            </div>
            <div>
                footer
            </div>
        </div>
    );
}

export default App;
