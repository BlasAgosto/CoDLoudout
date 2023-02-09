import React from "react";

export default function SMG() {
    const [weapon, setWeapon] = React.useState([])
    const guns = ['--','VEL 46','MX9','LACHMANN SUB','VAZNEV-9K','FSS HURRICANE','MINIBAK','BAS-P','PDSW 528','FENNEC 45' ]

    function handleChange(event){
        const {value} = event.target
        setWeapon(value)
    }


    return (
        <div className="dropdown">
            <h1>SMGs</h1>
            <select
            onChange={handleChange}
            value={weapon}
            >
                {guns.map(gun => <option>{gun}</option>)}
            </select>
        </div>
    )
}