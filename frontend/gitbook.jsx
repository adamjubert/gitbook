let React = require('react');
let ReactDOM = require('react-dom');
let Root = require('./components/root');
let configureStore = require('./store/store');


document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Root store={ configureStore() } />, root);
});
