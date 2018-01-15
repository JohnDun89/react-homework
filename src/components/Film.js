import React from 'react';

class Film extends React.Component {
  render() {
    return (
      <div className="film">
        <h2> { this.props.title} </h2>
        { this.props.children }
      </div>
    )
  }
}

export default Film;
