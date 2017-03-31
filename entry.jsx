import React from 'react';
import ReactDOM from 'react-dom';
import TestFile from './test_file';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<TestFile />, root);
});
