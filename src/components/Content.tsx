import { Header } from './Header';
import { MovieCard } from './MovieCard';

type propTypeContent = {
	movies: Array<any>;
	selectedGenre: any;
}

export function Content(props:propTypeContent) {
  	// Complete aqui
	return(
		<>
			<Header selectedGenre={props.selectedGenre}/>
			<main>
				<div className="movies-list">
					{props.movies.map(movie => (
						<MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
					))}
				</div>
			</main>
		</>
	)
}