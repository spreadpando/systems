import React from 'react';
import styled from "styled-components";
import threeEntryPoint from "./threejs/threeEntryPoint";
const Diver = styled.div`
position:relative;height:100vh; width:100vw;
`;

export default class Canvas1 extends React.Component {

	componentDidMount() {
		threeEntryPoint(this.threeRootElement);
	}

	render() {
		return (
			<Diver ref={element => this.threeRootElement = element} />
		);
	}
}