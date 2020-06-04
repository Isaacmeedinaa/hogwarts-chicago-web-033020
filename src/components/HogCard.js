import React, { Component } from 'react'

import HogCardDescription from './HogCardDescription'

export class HogCard extends Component {

    constructor() {
        super()

        this.state = {
            showDescription: false
        }
    }
 
    handleHogDescription = (event) => {
        this.setState(previousState => {
            return {
                showDescription: !previousState.showDescription
            }
        })
    }

    render() {

        let pigImgName = this.props.hog.name.toLowerCase().replace(/ /g,"_");
        let pigImgSrc = require(`../hog-imgs/${pigImgName}.jpg`)

        return (
            <div className='ui card pigTile'>
                <div className='image'>
                    <img alt='piggy' src={pigImgSrc} /> 
                </div>
                <div className='content'>
                    <h3 className='header'>{this.props.hog.name}</h3> 
                    Specialty: {this.props.hog.specialty}
                </div>
                {this.state.showDescription ? <HogCardDescription hog={this.props.hog} /> : null}
                <div className='extra-content'>
                <button onClick={this.handleHogDescription} className='ui button'>{this.state.showDescription ? 'Less Info' : 'More Info'}</button>
                    <button className='ui button'>
                        Hide Me
                        <span role='img' aria-label='snout'>🐽</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default HogCard
