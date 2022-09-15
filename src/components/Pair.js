import React from 'react'

export default function Pair (elem) {

    return (
        <div>
        <h3>Pair: {elem.id+1}</h3>
        {Object.values(elem.elem).map((elem) => {
            return (
            <li>{elem}</li>
            )
        })}
        </div>
    )
}