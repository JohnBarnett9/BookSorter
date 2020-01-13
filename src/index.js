import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route, Link, Redirect} from "react-router-dom";
import {Navbar, Nav, Grid, Row, Col} from "react-bootstrap";

const RouterExample = () => {

	const bookInfo =
		[
		  {
			"author": "Chinua Achebe",
			"title": "Things Fall Apart",
			"year": 1958
		  },
		  {
			"author": "Hans Christian Andersen",
			"title": "Fairy tales",
			"year": 1836
		  },
		  {
			"author": "Dante Alighieri",
			"title": "The Divine Comedy",
			"year": 1315
		  },
		  {
			"author": "Jane Austen",
			"title": "Pride and Prejudice",
			"year": 1813
		  },
		  {
			"author": "Giovanni Boccaccio",
			"title": "The Decameron",
			"year": 1351
		  },
		  {
			"author": "Emily Bront\u00eb",
			"title": "Wuthering Heights",
			"year": 1847
		  },
		  {
			"author": "Miguel de Cervantes",
			"title": "Don Quijote De La Mancha",
			"year": 1610
		  },
		  {
			"author": "Charles Dickens",
			"title": "Great Expectations",
			"year": 1861
		  }
		];

	let currentPath = window.location.pathname; //subdirectory can adapt to dev vs prod env
	currentPath = currentPath.substring(0, currentPath.length - 1); //trim '/' from end

	return (
		<BrowserRouter basename={currentPath} >
			<div>
				<div className="container">
					<Row>
						<Col>
						</Col>
						<Col lg={5.5}>
							<Navbar>
								<Nav>
									<Nav.Link>
										{/*<Link to="/John/React/Books">Book Title</Link>*/}
										<Link to="/">Book Title</Link>
									</Nav.Link>
									<Nav.Link>
										<Link to="/BookAuthor">Book Author</Link>
									</Nav.Link>
									<Nav.Link>
										<Link to="/BookYear">Book Year</Link>
									</Nav.Link>
								</Nav>
							</Navbar>
						</Col>
						<Col>
						</Col>
					</Row>
					<Row>
						<Col>
						</Col>
						<Col lg={5}>
							<Switch>
								{/*}
								<Route
								exact path="/John/React/Books"
								render={() => <BookTitle bookInfo={bookInfo}/>}>
								</Route>
								*/}
								<Route
								exact path="/"
								render={() => <BookTitle bookInfo={bookInfo}/>}>
								</Route>

								<Route
								path="/BookAuthor"
								render={() => <BookAuthor bookInfo={bookInfo}/>} >
								</Route>
								<Route
								path="/BookYear"
								render={() => <BookYear bookInfo={bookInfo}/>}>
								</Route>
								<Route  path="*" component={NotFound} >
									<Redirect to="./" />
								</Route>
							</Switch>
						</Col>
						<Col>
						</Col>
					</Row>
				</div>
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
			<h1 className="text-center">Sorted By Title</h1>
			<table>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Year</th>
				</tr>
				{props.bookInfo.sort(compareTitle).map((name, index) => {
					return (
						<tr>
							<td>{name.title}</td>
							<td>{name.author}</td>
							<td>{name.year}</td>
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
			<h1 className="text-center">Sorted By Author</h1>
			<table>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Year</th>
				</tr>
				{props.bookInfo.sort(compareAuthor).map((name, index) => {
					return (
						<tr>
							<td>{name.title}</td>
							<td>{name.author}</td>
							<td>{name.year}</td>
						</tr>
					);
				})}
			</table>

		</div>
	);
}

function BookYear(props){

	function compareYear(a,b){
		return a.year - b.year;
	}

	return(
		<div>
			<h1 className="text-center">Sorted By Year</h1>
			<table>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Year</th>
				</tr>
				{props.bookInfo.sort(compareYear).map((name, index) => {
					return (
						<tr>
							<td>{name.title}</td>
							<td>{name.author}</td>
							<td>{name.year}</td>
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





