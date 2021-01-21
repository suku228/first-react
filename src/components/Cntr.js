import React, { Component } from 'react'

 class Cntr extends Component {
     state = {
         count:10
     }
     clickHandler(){
         this.setState(prevState =>{
             return {
                 count:prevState.count +1
             }
         })
     }
    render() {
        console.log(this.state.count)
        return (
            <div>
                <button onClick={()=>this.clickHandler()}>click -{this.state.count}</button>
            </div>
        )
    }
}

export default Cntr
