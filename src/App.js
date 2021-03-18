import React from 'react';
import Counter from './Counter'
import './App.css';
import aardbei from './assets/aardbei.png'
import banaan from './assets/banaan.jpg'
function App() {
    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <Counter fruitName="Aardbei" image={aardbei}/>
            <Counter fruitName="Banaan" image={banaan}/>
        </>
    );
}

export default App;
