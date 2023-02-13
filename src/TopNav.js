import React from 'react'
import AR from './Components/ARs';
import BR from './Components/BRs';
import Shotgun from './Components/Shotguns';
import SMG from './Components/SMGs';
import LMG from './Components/LMGs';
import Sniper from './Components/Sniper';
import Marksman from './Components/Marksman';
import Handgun from './Components/Handguns';

export default function TopNav() {
    const [gunFamily, setGunFamily] = React.useState('')
    const iron = ['-- Choose --', 'Assault Rifles', 'Battle Rifles', 'Shotguns', 'SMGs', 'LMGs', 'Snipers', 'Marksman Rifles', 'Handguns']

    function handleChange(event){
        const {value} = event.target
        setGunFamily(value)
    }

    return (
        <div className='top--dropdown'>
            <h1 className="text">Choose your weapon type</h1>
            <select
                onChange={handleChange}
                value={gunFamily}
            >       
            {iron.map(type => <option key={type}>{type}</option>)}
            </select>

            {gunFamily === "Assault Rifles" && <AR/>}
            {gunFamily === "Battle Rifles" && <BR />}
            {gunFamily === "Shotguns" && <Shotgun />}
            {gunFamily === "SMGs" && <SMG />}
            {gunFamily === "LMGs" && <LMG />}
            {gunFamily === "Snipers" && <Sniper />}
            {gunFamily === "Marksman Rifles" && <Marksman />}
            {gunFamily === "Handguns" && <Handgun />}
        </div>
    )
}
