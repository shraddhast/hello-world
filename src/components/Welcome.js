import React, { Component } from 'react'

class Welcome extends Component {
    render(){
        // other way to it through destructure
       // const {name,hname}= this.props
       //return <h1>Welcome {name} a.k.a {.hname}</h1>
       // Similarly for state 
       
       // const {state1,state2}= this.state
       
        return <h1>Welcome {this.props.name} a.k.a {this.props.hname}</h1>
    }
}

export default Welcome