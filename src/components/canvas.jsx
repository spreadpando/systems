import React from 'react';
import styled from "styled-components";
import threeEntryPoint from "./threejs/threeEntryPoint";
const Diver = styled.div`
position:absolute;height:100vh; width:100vw;z-index:0;
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