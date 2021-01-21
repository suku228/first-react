import React, { Component } from 'react'
import UpdateComponent from './UpdateComponent'

 class ClickCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.countHandler}> click - {this.props.count}</button>
            </div>
        )
    }
}

export default UpdateComponent(ClickCounter)
