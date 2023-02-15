import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Container } from 'bootstrap'

export default function YTVid(props){

        const gun = props.weapon
        let url = ''
      
        return (
        <>
                {gun === 'M4' && (url = 'pzMzOfNhXHw')}
                {gun === 'TAQ-56' && (url = 'ZyFARGwK_2U')} 
                {gun === 'KASTOV 762' && (url = '-NEFGQE9FUo')} 
                {gun === 'Lachmann-556' && (url = '7UPtY4mZKiM')} 
                {gun === 'STB 556' && (url = 'F8-e07V9Fjw')} 
                {gun === 'M16' && (url = 'CF_F1Fo_nJg')}
                {gun === 'KASTOV-74U' && (url = 'PBGCglzNVl0')} 
                {gun === 'KASTOV 545' && (url = 'zh3fFMvhujU')} 
                {gun === 'CHIMERA' && (url = 'zh3fFMvhujU')} 
                {gun === 'M13B' && (url = 'FDFkUNy9veI')} 
                {gun === 'P890' && (url = 'WtrMcfIny2g')} 
                {gun === '.50 GS' && (url = 'xfYpneQJ-UE')} 
                {gun === 'X12' && (url = 'gRkH0Myj2Ds')}
                {gun === 'BASILISK' && (url = 'ooBvk9EadGU')} 
                {gun === 'X13 AUTO' && (url = 'gRkH0Myj2Ds')} 
                {gun === 'ERB-14' && (url = 'otulXh5M4BE')} 
                {gun === 'SP-R 208' && (url = 'ME4UJLWlUrM')} 
                {gun === 'LOCKWOOD MK2' && (url = 'LiISN28DFvI')} 
                {gun === 'LM-S' && (url = 'JeDDXbsegl8')}
                {gun === 'SA-B 50' && (url = '65lIMkbugvY')} 
                {gun === 'TAQ-M' && (url = '6S7fRi1_gvw')}
                {gun === 'LOCKWOOD 300' && (url = 'e2RXj3qjXcU')} 
                {gun === 'EXPIDITE 12' && (url = 'rb8iz-n6kVQ')} 
                {gun === 'BRYSON 800' && (url = 'FmvvT8zGCC8')} 
                {gun === 'BRYSON 890' && (url = '3rl56AIiJ8Y')} 
                {gun === 'LACHMANN-762' && (url = 'Do6SButK5Yw')} 
                {gun === 'S0-14' && (url = 'ZG3FcfPKGYI')} 
                {gun === 'TAQ-V' && (url = 'UpxLHaF3m7A')}
                {gun === 'FTAC RECON' && (url = 'tzooZ0xiMnM')} 
                {gun === 'MCPR-300' && (url = 'XFLvUaOuWRE')}
                {gun === 'VICTUS XMR' && (url = 'vIqOnN3vrI4')} 
                {gun === 'SIGNAL 50' && (url = 'TA5jiwya0_M')} 
                {gun === 'LA-B 330' && (url = 'GGUYEDn1B14')} 
                {gun === 'SP-X 80' && (url = 'VL09B9zFitU')} 
                {gun === 'VEL 46' && (url = 'tXqRfhnAyAQ')} 
                {gun === 'MX9' && (url = 'jLig_JQ-ryE')}
                {gun === 'LACHMANN SUB' && (url = '_IeCPcL-geU')} 
                {gun === 'MINIBAK' && (url = 'fE3hvdoPlk8')} 
                {gun === 'VAZNEV-9K' && (url = 'ljDNMhCGjNE')} 
                {gun === 'FSS HURRICANE' && (url = 'SV58RflSwcQ')} 
                {gun === 'BAS-P' && (url = 'FDjTyqg7EkQ')} 
                {gun === 'PDSW 528' && (url = 'UDNKRdGyAIw')} 
                {gun === 'FENNEC 45' && (url = 'yVXUGvO7jyM')} 
                {gun === 'SAKIN MG38' && (url = 'Tms_0fnNq1Y')} 
                {gun === 'HRC 56' && (url = 't3puD5Ch7Ow')} 
                {gun === '556 ICARUS' && (url = 'wRLjnq8NOWM')} 
                {gun === 'RAAL MG' && (url = 'z0fChE2U2Q8')} 
                {gun === 'RPK' && (url = 'vkeeAg9rdD8')}
                {gun === 'RAPP H' && (url = 'S8yN2HUsC08')} 
                <div className='ratio ratio-1x1'>
                        <iframe
                                className='video'
                                src={`https://youtube.com/embed/${url}`}
                                title='YouTube video'
                                allowFullScreen></iframe>
                </div>
        </>
)
}