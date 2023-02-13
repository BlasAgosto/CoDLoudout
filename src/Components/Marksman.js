import React from "react";
import Tuber from './Youtuber'

export default function Marksman() {
    const [weapon, setWeapon] = React.useState('')
    const guns = ['--', 'ERB-14','SP-R 208','LOCKWOOD MK2','LM-S','SA-B 50','TAQ-M']

    function handleChange(event){
        const {value} = event.target
        setWeapon(value)
    }

    return (

        <div className="dropdown">
            <h1 className="text">Marksman</h1>
            <select
            onChange={handleChange}
            value={weapon}
            >
                {guns.map(gun => <option key={gun}>{gun}</option>)}
            </select>
            <Tuber 
            weapon={weapon}
            />
        </div>
    )
}
