import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {Redirect} from "react-router-dom";

function RouterExample() {
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
					<Route path="/John/React/Books/BookAuthor" component={BookAuthor} >
					</Route>
					<Route exact path="/John/React/Books" component={BookTitle} >
					</Route>
					<Route  path="*" component={NotFound} >
						<Redirect to="localhost/John/React/Books" />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

function BookTitle() {
	return (
		<div>
			Book Title
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





