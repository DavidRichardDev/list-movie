import { MovieCard } from './MovieCard';

type propTypeContent = {
	movies: Array<any>;
}

export function Content(props:propTypeContent) {
  	// Complete aqui
	return(
		<main>
			<div className="movies-list">
				{props.movies.map(movie => (
					<MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
				))}
			</div>
		</main>
	)
}