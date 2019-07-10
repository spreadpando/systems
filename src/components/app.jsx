import React from "react";
import styled from "styled-components";
import Console from "./console.jsx";
import Canvas from "./canvas.jsx";
import Banner from "./banner.jsx";
import Footer from "./footer.jsx";
const AppGlobal = styled.div`
	position: absolute;
	height: 100vh;
	width: 100vw;
	display: grid;
	grid-template-columns: 40% 30% 20% 10%;
	grid-template-rows: 45% 50% 5%;
`;

export default class App extends React.Component {
	render() {
		return (
			<AppGlobal>
				<Console />
				<Canvas />
				<Banner />
				<Footer />
			</AppGlobal>
		);
	}
}
