import React, { Component } from 'react'
class Form extends Component {
constructor(props) {
    super(props)

    this.state = {
         username: '' ,
         comment : '' ,
         topic : '',

    }
}

handlerusernamechange = (event) => { 
this.setState({
   username : event.target.value  })
}

handlercommentchange = (event) => {
    this.setState({
        comment : event.target.value
    })
}
handlertopicchange =(event) => {
    this.setState({
        topic : event.target.value
    })
}
handelsubmit = (event) => {
    alert (`${this.state.username} ${this.state.comment} ${this.state.topic}`)
    event.preventDefault()
    }


    render() {
        return (
            <form onSubmit= {this.handelsubmit}>
            <div>
                <label>Username</label>
                <input type='text' 
                value={this.state.username} 
                onChange={this.handlerusernamechange}  />
            </div>
            <div>
                <label>Commemt</label>
               <textarea 
                value={this.state.comment}
                onChange= {this.handlercommentchange}> </textarea>
            </div>
            <div>
                <label> Topic</label>
                <select value= {this.state.topic} onChange={this.handlertopicchange}>
                    <option value= 'React'>React</option>
                    <option value= 'Angular'>Angular</option>
                    <option value= 'Vue'>Vue</option>
                </select>
            </div>
            <button>submit</button>
            </form>
           
        )
    }
}

export default Form
