//import Fla from '../../../public/assets/fla-logo.png'
import React from 'react'

import './style.css'

import Flamengo from '../../assets/fla-logo.png'

const moment = require('moment')

export const Timer = () => {
    
    const date = moment('22/03/1997', 'DD/MM/YYYY').fromNow()

    return (

        <div className="container">

            <h1>QUANTO TEMPO O FLAMENGO ESTÁ SEM TÍTULO?</h1>

            <section className="logo-container">

                <img src={ Flamengo } alt="Flamengo LOGO" />

            </section>
            <section className="date-container">

                <h2>{ date }</h2>

            </section>

        </div>

    )

}