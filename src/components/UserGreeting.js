import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isloggedIn: false
             
        }
    }

    render() {
   //4) Short circiut way
        return  this.state.isloggedIn && <div>  Welcome Vishwas </div> 

   //3) conditional ternary operator 
   //   return this.state.isloggedIn ?
     //      (<div>  Welcome Vishwas </div> ):(<div>  Welcome Guest </div>)

// 2) default element variable 
   //     let message
    //    if(this.state.isloggedIn){
  //          message= <div>  Welcome Vishwas </div>
   //     }
  //      else{
  //          message= <div>  Welcome Guest </div>
   //     }
  //      return(
  //          <div>{message}</div>
   //     )
  //  1) if-else
     //    if(this.state.isloggedIn){
     //       return (
    //     <div>  Welcome Vishwas </div>
    //    )}
    //  else{
    //        return (
   //         <div>  Welcome  Guest</div>
  //          )}

       
    }
}

export default UserGreeting
