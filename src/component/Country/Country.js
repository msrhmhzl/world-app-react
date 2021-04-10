import React from 'react'
import './Country.css'

function Country({name,flag,population,region,capital}){
    return(
        <div className="list-complete">
            <div className="card">
                <div className="card_img">
                    <div className="card_img_wrapper">
                        <img src={flag} alt="flag"/>
                    </div>
                </div>
                <div className="card_body">
                    <div className="card_body_title">{name}</div>
                    <br/>
                    <div className="card_body_details">
                        <p>
                            <span className="semibold"> Population : </span> 
                            {population}
                            <br/>
                            <span className="semibold"> Region : </span> 
                            {region}
                            <br/>
                            <span className="semibold"> Capital : </span> 
                            {capital}
                            <br/>
                        </p>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Country