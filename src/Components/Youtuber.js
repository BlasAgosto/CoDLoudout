import React from "react"
import sniperArr from './images.js'

export default function Youtuber(props){
    const [tube, setTube] = React.useState([])
    const tuber = ['--', 'Hero']

    function handleChange(event){
        const {value} = event.target
        setTube(value)
    }
    
    return (
        <div className='yt--dropdown'>
            <h1 className="text">Choose your 'Tuber</h1>
            <select
            onChange={handleChange}
            value={tube}
            id="tuber"
            >
                {tuber.map(yt => <option>{yt}</option>)}
            </select>
            <br />
            {tube === 'Hero' && props.weapon === 'SIGNAL 50' && <img src={sniperArr[2]} alt="sniper" />}
            {tube === 'Hero' && props.weapon === 'MCPR-300' && <img src={sniperArr[1]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'VICTUS XMR' && <img src={sniperArr[4]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'LA-B 330' && <img src={sniperArr[0]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'SP-X 80' && <img src={sniperArr[3]} alt="sniper"/>}
        </div>
    )
}