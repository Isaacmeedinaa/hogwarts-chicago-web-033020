import React, { Component } from 'react'

export class HogCardDescription extends Component {
    render() {
        return (
            <div className='description'>
                { this.props.hog.greased ? 'Greased' : 'Nongreased' }
                <p>Highest medal achieved: <b>{this.props.hog['highest medal achieved']}</b></p>
                    <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: <b>{this.props.hog.weight}</b></p>
            </div>
        )
    }
}

export default HogCardDescription
