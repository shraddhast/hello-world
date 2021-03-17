import React from 'react'

//function Greet(){
//    return <h1>Hello Vishwas</h1>
//}

const Greet = (props) => {
    console.log(props)
    return(
        <div>
            <h1>Hello {props.name} a.k.a {props.hname}</h1>
            {props.children}
        {/*   dont know how to acess children without props  {children} */}  
        </div>
      )

       

    
}

export default Greet