import React from "react";

export default function Marksman() {
    const [weapon, setWeapon] = React.useState([])
    const guns = ['--', 'ERB-14','SP-R 208','LOCKWOOD MK2','LM-S','SA-B 50','TAQ-M']

    function handleChange(event){
        const {value} = event.target
        setWeapon(value)
    }

    return (

        <div className="dropdown">
            <h1>Marksman</h1>
            <select
            onChange={handleChange}
            value={weapon}
            >
                {guns.map(gun => <option>{gun}</option>)}
            </select>
        </div>
    )
}
