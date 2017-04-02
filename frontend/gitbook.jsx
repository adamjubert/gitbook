import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


if (typeof document !== "undefined") {
	document.addEventListener("DOMContentLoaded", () => {
		const root = document.getElementById("root");
		ReactDOM.render(<Root store={ configureStore() } />, root);
	});
}
