import React from "react";
import Tuber from './Youtuber'
import YTVid from "./YTVid";

export default function Shotgun() {
    const [weapon, setWeapon] = React.useState('')
    const guns = ['--', 'LOCKWOOD 300','EXPIDITE 12','BRYSON 800','BRYSON 890']

    function handleChange(event){
        const {value} = event.target

        setWeapon(value)
    }
    
    return (

        <div className="dropdown">
            <h1 className="text">Shotguns</h1>
            <select
            onChange={handleChange}
            value={weapon}
            >
                {guns.map(gun => <option key={gun}>{gun}</option>)}
            </select>
            <Tuber 
            weapon={weapon}
            />
            <YTVid 
            weapon={weapon}
            />
        </div>
    )
}