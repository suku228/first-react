import React, { Component } from 'react'

class ChildComponents extends Component {
    state={
        name:""
    }
    // nameChangeHandler (e){
    //     this.setState({name:e.target.value})
    // }
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
                {this.state.name}
            </div>
        )
    }
}

export default ChildComponents
