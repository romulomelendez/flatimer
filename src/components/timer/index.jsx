//import Fla from '../../../public/assets/fla-logo.png'
import React from 'react'

import './style.css'

const moment = require('moment')

export const Timer = () => {
    
    const date = moment('22/03/1997', 'DD/MM/YYYY').fromNow()

    return (

        <div>

            <h1>MOJO</h1>
            <h2>{ date }</h2>

        </div>

    )

}