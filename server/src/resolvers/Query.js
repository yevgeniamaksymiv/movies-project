function movies(parent, args) {
  return (
    {
    page: 1,
    totalResults: 1,
    totalPages: 5,
    results: [
      {
        id: 2,
        title: 'title',
        releaseDate: 'date'
      }
    ]
    }
  )
}

module.exports = {
  movies
};
