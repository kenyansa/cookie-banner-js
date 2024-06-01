import { useState } from "react"
import './index.css'

function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF")

    function handleColorChange(event){
        setColor(event.target.value)
    }

    return(<>
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
        <h1 className="text-4xl font-bold mb-4 flex flex-box">Color Picker</h1>
        <div className="color-display p-4 border rounded-md" style={{background: color}}>
            <p>Selected color: {color}</p>
        </div>
        <label htmlFor="selectColor" className="text-lg font-medium">Select a color from below:</label>
        <input 
        type="color" 
        value={color} 
        onChange={handleColorChange} 
        className="p-5 border rounded-md cursor-pointer"
        />
    </div>
    </>
    )
}
export default ColorPicker;