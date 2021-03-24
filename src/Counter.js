import React, {useState} from "react";

function Counter({fruitName, image}) {
    const [amount, setAmount] = useState(0);

    function plusClickHandler() {
        setAmount(amount + 1)
        return amount
    }

    function minusClickHandler() {
        if (amount >= 1) {
            setAmount(amount - 1)
            return amount
        }
    }
    // ik krijg deze functie niet zo dat ik alle counters aangeroepen krijg,
    // en  om alle fruitsoorten nou met de hand uit te gaan schrijven lijkt me ook niet helemaal "DRY"
    //alle tips zijn welkom!
    function reset() {
        setAmount(0)
        return (
            amount
        )
    }
        return (
            <div className='counter-window' id={fruitName}>
                <h3>{fruitName}</h3><div className='count-wrap'><button name='minus' onClick={minusClickHandler}>-</button>
                <h3 className='numberCounter'>{amount}</h3>
                <button name='plus' onClick={plusClickHandler}>+</button>
                <button type='button' onClick={reset}>Reset</button></div>

            </div>
        )
}
export default Counter
