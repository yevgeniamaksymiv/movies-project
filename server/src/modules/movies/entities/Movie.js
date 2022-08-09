const { IMAGE_BASE_PATH } = require('../../../config');

class Movie {
  constructor(movie) {
    this.id = movie.id;
    this.title = movie.title;
    this.releaseDate = this.releaseDateFormat(movie.release_date);
    this.posterPath = `${IMAGE_BASE_PATH}${movie.poster_path}`;
  }

  releaseDateFormat(dateToFormat) {
    const date = new Date(dateToFormat.split('-').join(','));
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(
      date
    );
    const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    return `${day} ${month} ${year}`;
  }
}

module.exports = {
  Movie
}