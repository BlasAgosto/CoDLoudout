import React from "react";
import image from '../Pics/logo.png'

export default function AR() {
    const [weapon, setWeapon] = React.useState([])
    const guns = ['--','M4', 'TAQ-56','KASTOV 762','LACHMANN-556','STB 556','M16','KASTOV-74U','KASTOV 545','CHIMERA','M13B']

    function handleChange(event){
        const {value} = event.target
        setWeapon(value)
    }

    return (
        <div className="dropdown">
            <h1>ARs</h1>
            <select
            value={weapon}
            onChange={handleChange}
            >
               {guns.map(gun=> <option>{gun}</option>)} 
            </select>
            {weapon === "M4" && <img src={image}/>}
        </div>
    )
}