import React from "react";
import Tuber from './Youtuber'

export default function LMG() {
    const [weapon, setWeapon] = React.useState('')
    const guns = ['--', 'SAKIN MG38','HRC 56','556 ICARUS','RAAL MG','RPK','RAPP H']

    function handleChange(event){
        const {value} = event.target
        setWeapon(value)
    }

    return (

        <div className="dropdown">
            <h1 className="text">LMGs</h1>
            <select
            onChange={handleChange}
            value={weapon}
            >
                {guns.map(opt => <option key={opt}>{opt}</option>)}
            </select>
            <Tuber 
            weapon={weapon}
            />
        </div>
    )
}