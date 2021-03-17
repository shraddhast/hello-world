import React, { Component } from 'react'

 class EventBind extends Component {
  constructor(){
      super()
      
      this.state= {
          message: 'Hello'
      }
      //this.clickhandler= this.clickhandler.bind(this)
  }

 // clickhandler(){
 //    this.setState ({
 //     message: 'good bye'
 //   })
 //   console.log(this)
 // }

 clickhandler = () => {
    this.setState ({
             message: 'good bye'
           })
 }
    render() {
        return (
            <div>
                <div> {this.state.message}</div>
            {/*  <button onClick= {this.clickhandler.bind(this)}>cccc</button> 
              <button onClick= {() => this.clickhandler()}>Binding</button> */} 
              <button onClick= {this.clickhandler}>Binding</button> 

  
            </div>
        )}
}

export default EventBind

