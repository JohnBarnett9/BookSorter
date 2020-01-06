import React from "react";
import ReactDOM from "react-dom";
import {useRef} from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {Redirect} from "react-router-dom";

const RouterExample = () => {
	const bookInfo =
		[
			{
			"title": "The Great Gatsby",
			"author": "Fitzgerald",
			"genre": "American Fiction"
			},
			{
			"title": "The Grapes of Wrath",
			"author": "Steinbeck",
			"genre": "American Fiction"
			}
		];

	return (
		<BrowserRouter>
			<div>
				<ul>
					<li>
						<Link to="/John/React/Books">BookTitle</Link>
					</li>
					<li>
						<Link to="/John/React/Books/BookAuthor">BookAuthor</Link>
					</li>
				</ul>
				<Switch>
					<Route
					exact path="/John/React/Books"
					component={BookTitle}>
					</Route>
					<Route path="/John/React/Books/BookAuthor" component={BookAuthor} >
					</Route>
					<Route  path="*" component={NotFound} >
						<Redirect to="localhost/John/React/Books" />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

function BookTitle() {
	/**/
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
		<div>
			<h1>by title</h1>
			<table>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Genre</th>
				</tr>
				{bookInfo.sort(function(a,b){return a.title > b.title}).map((name, index) => {
					return (
						<tr>
							<td>{name.title}</td>
							<td>{name.author}</td>
							<td>{name.genre}</td>
						</tr>
					);
				})}
			</table>
			<h1>by author</h1>
			<table>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Genre</th>
				</tr>
				{bookInfo.sort(function(a,b){return a.author > b.author}).map((name, index) => {
					return (
						<tr>
							<td>{name.title}</td>
							<td>{name.author}</td>
							<td>{name.genre}</td>
						</tr>
					);
				})}
			</table>
			<h1>by genre</h1>
			<table>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Genre</th>
				</tr>
				{bookInfo.sort(function(a,b){return a.genre > b.genre}).map((name, index) => {
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
function BookAuthor(){
	return (
		<div>
			Book Author
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





