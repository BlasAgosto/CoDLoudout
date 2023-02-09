import React from "react";

export default function LMG() {
    const [weapon, setWeapon] = React.useState([])
    const guns = ['--', 'SAKIN MG38','HRC 56','556 ICARUS','RAAL MG','RPK','RAPP H']

    function handleChange(event){
        const {value} = event.target
        setWeapon(value)
    }

    return (

        <div className="dropdown">
            <h1>LMGs</h1>
            <select
            onChange={handleChange}
            value={weapon}
            >
                {guns.map(opt => <option>{opt}</option>)}
            </select>
        </div>
    )
}