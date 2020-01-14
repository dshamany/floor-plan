import React from 'react'
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bedroom from './Bedroom'
import Bath from './Bath'
import './style.css'

export default function FloorPlan(props) {
    return(
        <div>
            <Bedroom bedNum={1}/>
            <Kitchen />
            <LivingRoom />
            <Bath size={'Full'}/>
            <Bedroom bedNum={2}/>
            <Bath size={'Half'}/>
            <Bedroom bedNum={3}/>
        </div>
    );
}