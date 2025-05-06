class Exercise3 {
    #movies = new Map();

    //key is the genre: string, value is array of movies
    examples = {
        thriller: [
            { id: '1', title: 'The American' },
            { id: '2', title: 'Arcadian' }
        ],
        action: [
            { id: '3', title: 'Mad Max: Fury Road' },
            { id: '4', title: 'John Wick' }
        ],
        comedy: [
            { id: '5', title: 'The Grand Budapest Hotel' },
            { id: '6', title: 'Superbad' }
        ],
        drama: [
            { id: '7', title: 'The Shawshank Redemption' },
            { id: '8', title: 'Forrest Gump' }
        ],
        sciFi: [
            { id: '9', title: 'Inception' },
            { id: '10', title: 'Interstellar' }
        ],
        horror: [
            { id: '11', title: 'Get Out' },
            { id: '12', title: 'Hereditary' }
        ]
    };



    add_genre() {
// add genre if genre does not exist
// return true if the genre is added successfully, false otherwise
        return true;
    }

    add_movie_in_genre(genre, new_movie) {
// add movie if movie id does not exist
// return true if the movie is added successfully, false otherwise
        return true;
    }

    update_movie_title_by_genre_and_movie_id(genre, movie_id, new_title) {
// update a movie within a certain genre
// return true if the movie's title is updated successfully, false otherwise
        return true;
    }

    delete_movie_by_genre_and_movie_id(genre, movie_id) {
// delete movie
// return true if the movie is delete successfully, false otherwise
        return true;
    }

    get_movie_title_by_id(genre, movie_id) {
// return the movie title
        return '';
    }
}