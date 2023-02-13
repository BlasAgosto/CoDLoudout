import React from "react";
import Tuber from './Youtuber.js'

export default function SMG() {
    const [weapon, setWeapon] = React.useState('')
    const guns = ['--','VEL 46','MX9','LACHMANN SUB','VAZNEV-9K','FSS HURRICANE','MINIBAK','BAS-P','PDSW 528','FENNEC 45' ]

    function handleChange(event){
        const {value} = event.target
        setWeapon(value)
    }


    return (
        <div className="dropdown">
            <h1 className="text">SMGs</h1>
            <select
            onChange={handleChange}
            value={weapon}
            >
                {guns.map(gun => <option key={gun}>{gun}</option>)}
            </select>
            <br />
            <Tuber 
            weapon={weapon}
            />
        </div>
    )
}