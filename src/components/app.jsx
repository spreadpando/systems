import React from 'react';
import styled from 'styled-components';
import Console from './console.jsx';
import Canvas from './canvas.jsx';
import Banner from './banner.jsx';
const AppGlobal = styled.div`position:absolute;height:100vh;width:100vw;font-size:1em;font-family: 'Anonymous-pro', monospace;line-height:1.2em;display:grid;grid-template-columns:33% 33% 33% 1%;grid-template-rows:79% 19% 2%;`;

export default class App extends React.Component {
	render() {
		return (
			<AppGlobal>
				<Canvas />
				<Banner />
				<Console />
			</AppGlobal>
		);
	}
}