import React from 'react'

function Person({p}) {
    return (
        <div>
            <h2>I am {p.name} and I am {p.age} years old .My skill is {p.skill} </h2> 
        </div>
    )
}

export default Person
