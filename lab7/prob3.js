class Genre {
  #movies = new Map();


  add_genre(genre) {
    // add genre if genre does not exist
    // return true if the genre is added successfully, false otherwise
    if (this.#movies.get(genre) !== null) {
      this.#movies.set(genre, [])
      return true;
    } else {
      return false;
    }
  }

  add_movie_in_genre(genre, new_movie) {
    // add movie if movie id does not exist
    // return true if the movie is added successfully, false otherwise
    if (this.#movies.get(genre) !== null) {
      let curGenre = this.#movies.get(genre)
      curGenre.push({
        id: (curGenre.length + 1).toString(),
        title: new_movie
      })
      this.#movies.set(genre, curGenre)
      return true;
    } else {
      return false;
    }

  }

  update_movie_title_by_genre_and_movie_id(genre, movie_id, new_title) {
    // update a movie within a certain genre
    // return true if the movie's title is updated successfully, false otherwise
    if (this.#movies.get(genre) !== null) {
      let curGenre = this.#movies.get(genre)
      let movie = curGenre.find(m => m.id === movie_id)
      if (movie) {
        movie.title = new_title
      }
      return true;
    } else {
      return false;
    }
  }

  delete_movie_by_genre_and_movie_id(genre, movie_id) {
    // delete movie
    // return true if the movie is delete successfully, false otherwise
    if (this.#movies.get(genre) !== null) {
      let curGenre = this.#movies.get(genre)
      this.#movies.set(genre, curGenre.filter(m => m.id !== movie_id))
      return true;
    } else {
      return false;
    }

  }

  get_movie_title_by_id(genre, movie_id) {
// return the movie title
    if (this.#movies.get(genre) !== null) {
      let curGenre = this.#movies.get(genre)
      let movie = curGenre.find(m => m.id === movie_id)
      return movie.title;
    } else {
      return false;
    }
  }
}

let genre = new Genre()

genre.add_genre("action")
let movie1 = genre.add_movie_in_genre("action", "Mad Max: Fury Road")
console.log("add_movie_in_genre", movie1)

let movie2 = genre.add_movie_in_genre("action", "John Wick")
console.log("add_movie_in_genre", movie2)


genre.add_genre("drama")

let movie3 = genre.add_movie_in_genre("drama", "The Shawshank Redemption")
console.log("add_movie_in_genre", movie3)

let movie4 = genre.add_movie_in_genre("drama", "Forrest Gump")
console.log("add_movie_in_genre", movie4)

let title = genre.get_movie_title_by_id("action", "1")
console.log("get_movie_title_by_id", title)

let updated = genre.update_movie_title_by_genre_and_movie_id("action", "1", "Mad Max: End Game")
console.log("update_movie_title_by_genre_and_movie_id", updated)

let deleted = genre.delete_movie_by_genre_and_movie_id("drama", "2")
console.log("delete_movie_by_genre_and_movie_id", deleted)