"use client"

import { useState } from "react";

export default function NewItem (){

    // quantity use state 
    const [quantity, setQuantity] = useState(1);

    // name use state
    const [name, setName] = useState("");

    // category use state 
    const [category, setCategory] = useState("produce");

    // Counter 
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
            category,
          };
        
        console.log(item);

        

        alert(`${quantity} ${name} from ${category} added to list!`);
    };

return(
    <div >
        <form >
            <input 
            type = "text"
            value = {name}
            placeholder="Item Name"
            onChange = {(e) => setName(e.target.value)}
            required
            />

            <p>Quantity: {quantity}</p>
            <button 
            className="text-black bg-slate-400 w-6 m-4" 
            disabled={btnDisabled} 
            onClick={decrement}>-</button>

            <button 
            className="text-black bg-slate-400 w-6 m-4" 
            onClick={increment}>+</button>

            <select>
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozenFoods">Frozen Foods</option>
                <option value="cannedGoods">Canned Goods</option>
                <option value="dryGoods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
            </select>

            <button onClick={handleSubmit}>Submit</button>
        </form>

    </div>
);
};

