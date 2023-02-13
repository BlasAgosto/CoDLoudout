import React from "react"
import sniperArr from './images.js'

export default function Youtuber(props){
    const [tube, setTube] = React.useState('')
    const tuber = ['--', 'Hero']

    function handleChange(event){
        const {value} = event.target
        setTube(value)
    }
    
    return (
        <div className='yt--dropdown'>
            <h1 className="text">Choose your YouTuber</h1>
            <select
            onChange={handleChange}
            value={tube}
            id="tuber"
            >
            {tuber.map(yt => <option key={yt}>{yt}</option>)}
            </select>
            <br />
            <br />
            <br />
            {tube === 'Hero' && props.weapon === 'SIGNAL 50' && <img src={sniperArr[2]} alt="sniper" />}
            {tube === 'Hero' && props.weapon === 'MCPR-300' && <img src={sniperArr[1]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'VICTUS XMR' && <img src={sniperArr[4]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'SP-X 80' && <img src={sniperArr[3]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'LA-B 330' && <img src={sniperArr[0]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === '.50 GS' && <img src={sniperArr[5]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === '556 ICARUS' && <img src={sniperArr[6]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'BAS-P' && <img src={sniperArr[7]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'BASILISK' && <img src={sniperArr[8]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'BRYSON 800' && <img src={sniperArr[9]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'BRYSON 890' && <img src={sniperArr[10]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'CHIMERA' && <img src={sniperArr[11]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'ERB-14' && <img src={sniperArr[12]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'EXPIDITE 12' && <img src={sniperArr[13]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'FENNEC 45' && <img src={sniperArr[14]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'FSS HURRICANE' && <img src={sniperArr[15]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'FTAC RECON' && <img src={sniperArr[16]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'HRC 56' && <img src={sniperArr[17]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'KASTOV-74U' && <img src={sniperArr[18]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'KASTOV 545' && <img src={sniperArr[19]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'KASTOV 762' && <img src={sniperArr[20]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'LACHMANN-556' && <img src={sniperArr[21]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'LACHMANN-762' && <img src={sniperArr[22]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'LACHMANN SUB' && <img src={sniperArr[23]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'LM-S' && <img src={sniperArr[24]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'LOCKWOOD 300' && <img src={sniperArr[25]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'LOCKWOOD MK2' && <img src={sniperArr[26]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'M4' && <img src={sniperArr[27]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'M13B' && <img src={sniperArr[28]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'M16' && <img src={sniperArr[29]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'MINIBAK' && <img src={sniperArr[30]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'MX9' && <img src={sniperArr[31]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'P890' && <img src={sniperArr[32]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'PDSW 528' && <img src={sniperArr[33]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'RAAL MG' && <img src={sniperArr[34]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'RAPP H' && <img src={sniperArr[35]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'RPK' && <img src={sniperArr[36]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'SA-B 50' && <img src={sniperArr[37]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'SAKIN MG38' && <img src={sniperArr[38]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'S0-14' && <img src={sniperArr[39]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'SP-R 208' && <img src={sniperArr[40]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'STB 556' && <img src={sniperArr[41]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'TAQ-56' && <img src={sniperArr[42]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'TAQ-M' && <img src={sniperArr[43]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'TAQ-V' && <img src={sniperArr[44]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'VAZNEV-9K' && <img src={sniperArr[45]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'VEL 46' && <img src={sniperArr[46]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'X12' && <img src={sniperArr[47]} alt="sniper"/>}
            {tube === 'Hero' && props.weapon === 'X13 AUTO' && <img src={sniperArr[48]} alt="sniper"/>}
        </div>
    )
}