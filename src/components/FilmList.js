import React from 'react'
import Film from './Film.js'

class FilmList extends React.Component {

  render () {
    console.log(this.props.films);

    const filmNodes = this.props.films.map( function (film) {
      return (
        <Film key={ film.id }title={ film.title }>
          { film.director }
        </Film>
      )
    });
    return (
      <div className="film-list">
        { filmNodes }
      </div>
    )
  }
}

export default FilmList;
