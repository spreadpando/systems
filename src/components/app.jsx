import React from 'react';
import Console from './console.jsx'
import Canvas1 from './canvas1.jsx';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Canvas1 />
				<Console />
			</div>
		);
	}
}