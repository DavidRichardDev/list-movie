import { Button } from './Button';

type propTypeSidebar = {
	genresList: Array<any>;
	selectedGenreId: Number;
	handleClickButton: any;
};


export function SideBar(props:propTypeSidebar) {
  // Complete aqui

  return (
			<nav className="sidebar">
				<span>Watch<p>Me</p></span>
				<div className="buttons-container">
					{props.genresList.map(genre => (
					<Button
						key={String(genre.id)}
						title={genre.title}
						iconName={genre.name}
						onClick={() => props.handleClickButton(genre.id)}
						selected={props.selectedGenreId === genre.id}
					/>
					))}
				</div>
			</nav>
  )

  


}