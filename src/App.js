import React from 'react';
import Counter from './Counter'
import './App.css';
import Form from "./Form";

function App() {
    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div className='products-wrapper'>
                <Counter fruitName="Aardbei"/>
                <Counter fruitName="Banaan"/>
                <Counter fruitName="Appel"/>
                <Counter fruitName="Kiwi"/></div>

            <h2>Bestelformulier</h2><Form/>
        </>
    );
}

export default App;
