import React from "react";
function Counter({fruitName, image}) {
    const [amount, setAmount] = React.useState(0)

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
    return (
        <div className="counter-window">
            <img src={image} className='backdrop-counter' alt={fruitName}/>
            <h3>{fruitName}</h3>
            <button name='minus' onClick={minusClickHandler}>-</button>
            <h4 className='number-counter'>{amount}</h4>
            <button name='plus' onClick={plusClickHandler}>+</button>
        </div>
    )
}

export default Counter