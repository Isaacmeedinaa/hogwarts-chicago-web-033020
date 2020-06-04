import React, { Fragment } from "react";
import HogCard from './HogCard'

class HogsBrowser extends React.Component {

  renderHogCards = () => {
    return this.props.hogs.map(hog => {
      return <HogCard hog={hog} key={hog.id} />
    })
  }

  render() {
    return (
      <div className='ui three cards'>
        {this.renderHogCards()}
      </div>
    );
  }
}

export default HogsBrowser;
