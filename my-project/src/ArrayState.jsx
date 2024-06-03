import { useState } from "react";

function ArrayState(){

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function  handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods([newFood]);
    }

    function handleRemoveFood(){

    }

    return(
        <>
            <h2>List of Foods</h2>
            <ul>
                {foods.map((food, index) => <li key={index}>{food}</li>)}
            </ul>
            <input 
            type="text"
            id="foodInput"
            placeholder="Enter food name" />

        <button onClick={handleAddFood}>Add Food</button>
        </>
    )

}

export default ArrayState;