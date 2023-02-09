import React from "react";

export default function Handgun() {
    const [weapon, setWeapon] = React.useState([])
    const guns = ['--', 'P890','.50 GS','X12','BASILISK','X13 AUTO']

    function handleChange(event){
        const {value} = event.target
        setWeapon(value)
    }

    return (

        <div className="dropdown">
            <h1>Handguns</h1>
            <select
            onChange={handleChange}
            value={weapon}
            >
                {guns.map(gun => <option>{gun}</option>)}
            </select>
        </div>
    )
}
