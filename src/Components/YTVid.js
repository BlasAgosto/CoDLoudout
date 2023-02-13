import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Container } from 'bootstrap'

export default function YTVid(props){

        const gun = props.weapon
        let url = ''
      
        return (
                <>
                {gun === 'MCPR-300' && <p className="text">{url = 'XFLvUaOuWRE'} </p>}
                {gun === 'M4' && <p className="text">{url = 'pzMzOfNhXHw'} </p>}
                {url}
                <div class="ratio ratio-16x9">
                        <iframe src={`https://www.youtube.com/embed/${url}`} title="YouTube video" allowfullscreen></iframe>
                </div>
                </>
        )
}