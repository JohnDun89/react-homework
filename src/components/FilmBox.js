import React from 'react';
import FilmList from './FilmList.js'

class FilmBox extends React.Component {
  constructor(prop) {
    super(prop)

    this.state = {
      films: [
        {id:1, title: 'Hunt For Red October', director: 'John McTiernan', staring: 'Sean Connery'},
        {id:2, title: 'There Will be Bood', director: 'Paul Thomas Anderson', staring: 'Daniel Day Lewis'},
        {id:3, title: 'Last of the Mohecians', director: 'Michael Mann', staring: 'Daniel Day Lewis'}
      ]
    }
  }


  render() {
      return (
        <div className="Film-box">
          <FilmList Films={ this.state.films }/>
        </div>
      );
    }
}

export default FilmBox;
