"use client"

import { useState } from "react";

export default function NewItem (){

    // -- Use States --

    // quantity use state 
    const [quantity, setQuantity] = useState(1);

    // name use state
    const [name, setName] = useState("");

    // category use state 
    const [category, setCategory] = useState("Produce");


    // -- Functions --

    // Counter Functions
    let btnDisabled = false;
    if (quantity == 1){
        btnDisabled = true;
    }
    
    const increment=()=>{
        setQuantity(quantity+1);
    }
    const decrement=()=>{
        if (quantity >=1){
            setQuantity(quantity-1);
        }
    }

    // Form Submission Handler
    const handleSubmit = (event) => {
        // preventing submission
        event.preventDefault();

        // item object or whatever
        const item = {
            name,
            quantity,
            category
          };
        
        console.log(item);

        

        alert(`${quantity} ${name} from ${category} added to list!`);
    };

    // -- Styles --

    // Active Button Style
    const btnStyle = "text-black bg-red-400 w-6 m-2 hover:bg-red-600";

    // Submit Button Style
    const submitStyle = "text-black bg-red-400 border-double border-white";

    // Input Field Style
    const inputStyle = "text-black bg-red-200"



return(
    <div>
            <form onSubmit={handleSubmit} >
                <input 
                required
                type = "text"
                value = {name}
                placeholder="Item Name"
                onChange = {(e) => setName(e.target.value)}
                className={inputStyle}
                />

                <div>
                    <p>Quantity: {quantity}</p>
                    <button 
                    type="button"
                    className={btnStyle}
                    disabled={btnDisabled} 
                    onClick={decrement}>-</button>

                    <button 
                    type="button"
                    className = {btnStyle} 
                    onClick={increment}>+</button>
                </div>

                <select 
                onChange = {(event) => setCategory(event.target.value)} 
                value={category}
                className={inputStyle}
                >
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>

                <button type="submit" className={submitStyle}>Save</button>
                </form>
    </div>
);
};

