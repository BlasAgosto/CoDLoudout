import React from "react";
import Tuber from './Youtuber'

export default function BR() {
    const [weapon, setWeapon] = React.useState('')
    const guns = ['--','LACHMANN-762','S0-14','TAQ-V','FTAC RECON']

    function handleChange(event){
        const {value} = event.target

        setWeapon(value)
    }

    return (
        <div className="dropdown">
            <h1 className="text">Battle Rifles</h1>
            <select
            value = {weapon}
            onChange={handleChange}
            >
            {guns.map(gun => <option key={gun}>{gun}</option>)}
            </select>
            <Tuber 
            weapon={weapon}
            />
        </div>
    )
} 