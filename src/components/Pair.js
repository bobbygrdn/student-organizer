import React from 'react'

export default function Pair (elem) {

    if(elem.elem.P3 !== undefined) {
        return (
            <div>
            <h3>Pair: {elem.id+1}</h3>
            <li>{elem.elem.P1}</li>
            <li>{elem.elem.P2}</li>
            <li>{elem.elem.P3}</li>
            </div>
        )
    } else {
        return (
            <div>
            <h3>Pair: {elem.id+1}</h3>
            <li>{elem.elem.P1}</li>
            <li>{elem.elem.P2}</li>
            </div>
        )
    }
}