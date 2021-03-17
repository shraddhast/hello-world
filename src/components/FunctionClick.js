import React, { Component } from 'react'

class FunctionClick extends Component {
    render(){

        function clickhandler()
        {
            console.log('Button clicked')
        }
        return <div>
            <button onClick = {clickhandler}>Click</button>
        </div>

    }
}

export default FunctionClick