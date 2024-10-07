"use client"

import { useState } from "react";

export default function NewItem (){

    const [quantity, setQuantity] = useState(1);

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

    const btnStyle = "bg-slate-500 text-white rounded py-2 px-4 mt-5 hover:bg-slate-700 active:bg-blue-950 disabled:bg-gray-400 mr-3"
return(
    <div className="bg-white text-black ">
        <p className="text-orange-900">Quantity: {quantity}</p>
        <button className={btnStyle} disabled={btnDisabled} onClick={decrement}>-</button>
        <button className={btnStyle} onClick={increment}>+</button>
    </div>
);
};

