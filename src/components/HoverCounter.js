import React, { Component } from 'react'
import UpdateComponent from './UpdateComponent'

 class HoverCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.countHandler}> click - {this.props.count}</button>
            </div>
        )
    }
}

export default UpdateComponent(HoverCounter)
