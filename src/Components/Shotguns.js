import React from "react";

export default function Shotgun() {
    const [weapon, setWeapon] = React.useState([])
    const guns = ['--', 'LOCKWOOD 300','EXPIDITE 12','BRYSON 800','BRYSON 890']

    function handleChange(event){
        const {value} = event.target

        setWeapon(value)
    }
    
    return (

        <div className="dropdown">
            <h1>Shotguns</h1>
            <select
            onChange={handleChange}
            value={weapon}
            >
                {guns.map(gun => <option>{gun}</option>)}
            </select>
        </div>
    )
}