import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Brucee','Clark','Diana','Brucee']
    const nameList = names.map((n,index) => <h2 key={index}>{index}{n}</h2>)
    const persons = [
        {   id:1,
            name: 'Bru',
            age:30,
            skill:'react' },
        {  id: 2,
            name:'cla',
            age: 23,
            skill:'react'},
        {   id: 3,
            name: 'dia',
            age: 29,
            skill: 'react' }]
    const personList = persons.map(p => <Person key={p.id} p={p} />) 

    return ( 
    <div> 
        <div>{nameList}</div>
        <div> {personList}</div>
     </div>

       // <div>{
            // array.map is syntax
          //  names.map(name => <h2>{name}</h2>)
     //       } </div>


       // <div>
       //     <h2>{names[0]}</h2>
       //     <h2>{names[1]}</h2>
       //     <h2>{names[2]}</h2>
       //     <h2>{names[3]}</h2>
       // </div>
    )
}

export default NameList
