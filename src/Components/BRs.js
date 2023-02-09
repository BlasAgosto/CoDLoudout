import React from "react";

export default function BR() {
    const [weapon, setWeapon] = React.useState([])
    const guns = ['--','LACHMANN-762','S0-14','TAQ-V','FTAC RECON']

    function handleChange(event){
        const {name, value, checked, type} = event.target

        setWeapon(value)
    }

    return (
        <div className="dropdown">
            <h1>BRs</h1>
            <select
            value = {weapon}
            onChange={handleChange}
            >
            {guns.map(gun => <option>{gun}</option>)}
            </select>
        </div>
    )
} 