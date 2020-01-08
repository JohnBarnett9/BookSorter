import React from "react";
import {useEffect} from "react";
import ReactDOM from "react-dom";
import {useRef} from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {Redirect} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";

const RouterExample = () => {
	const bookInfo =
		[
			{
			"title": "CThe Great Gatsby",
			"author": "Fitzgerald",
			"genre": "XAmerican Fiction"
			},
			{
			"title": "AThe Grapes of Wrath",
			"author": "Steinbeck",
			"genre": "YAmerican Fiction"
			},
			{
			"title": "B",
			"author": "DFitzgerald",
			"genre": "ZAmerican Fiction"
			}
		];

	return (
		<BrowserRouter>
			<div>
				<Navbar>
					<Nav>
						<Nav.Link>
							<Link to="/John/React/Books">BookTitle</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/John/React/Books/BookAuthor">BookAuthor</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/John/React/Books/BookGenre">Book Genre</Link>
						</Nav.Link>
					</Nav>
				</Navbar>
				<Switch>
					<Route
					exact path="/John/React/Books"
					render={() => <BookTitle bookInfo={bookInfo}/>}>
					</Route>
					<Route
					path="/John/React/Books/BookAuthor"
					render={() => <BookAuthor bookInfo={bookInfo}/>} >
					</Route>
					<Route 
					path="/John/React/Books/BookGenre" 
					render={() => <BookGenre bookInfo={bookInfo}/>}>
					</Route>
					<Route  path="*" component={NotFound} >
						<Redirect to="localhost/John/React/Books" />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

function BookTitle(props) {

	function compareTitle(a,b){
		if (a.title < b.title){
			return -1;
		}
		if (a.title > b.title) {
			return 1;
		}
		return 0;
	}

	return (
		<div>
			<h1>by title</h1>
			<table>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Genre</th>
				</tr>
				{props.bookInfo.sort(compareTitle).map((name, index) => {
					return (
						<tr>
							<td>{name.title}</td>
							<td>{name.author}</td>
							<td>{name.genre}</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
}
function BookAuthor(props){

	function compareAuthor(a,b){
		if (a.author < b.author) {
			return -1;
		}
		if (a.author > b.author) {
			return 1;
		}
		return 0;
	}

	return (
		<div>
			<h1>by author</h1>
			<table>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Genre</th>
				</tr>
				{props.bookInfo.sort(compareAuthor).map((name, index) => {
					return (
						<tr>
							<td>{name.title}</td>
							<td>{name.author}</td>
							<td>{name.genre}</td>
						</tr>
					);
				})}
			</table>

		</div>
	);
}

function BookGenre(props){

	function compareGenre(a,b){
		if (a.genre < b.genre) {
			return -1;
		}
		if (a.genre > b.genre) {
			return 1;
		}
		return 0;
	}

	return(
		<div>
			<h1>by genre</h1>
			<table>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Genre</th>
				</tr>
				{props.bookInfo.sort(compareGenre).map((name, index) => {
					return (
						<tr>
							<td>{name.title}</td>
							<td>{name.author}</td>
							<td>{name.genre}</td>
						</tr>
					);
				})}
			</table>
		</div>
	);

}

function NotFound(){
	return (
		<div>
			Not found...
		</div>
	);
}
const rootElement = document.getElementById("root");
ReactDOM.render(<RouterExample/>, rootElement);





