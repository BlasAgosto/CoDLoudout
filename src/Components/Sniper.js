import React from "react";

export default function Sniper() {
    const [weapon, setWeapon] = React.useState([])
    const guns = ['--','MCPR-300','VICTUS XMR','SIGNAL 50','LA-B 330','SP-X 80' ]

    function handleChange(event){
        const {value} = event.target
        setWeapon(weapon)
    }
    return (

        <div className="dropdown">
            <h1>Snipers</h1>
            <select
            onChange={handleChange}
            value={weapon}
            >
                {guns.map(gun => <option>{gun}</option>)}
            </select>
        </div>
    )
}




