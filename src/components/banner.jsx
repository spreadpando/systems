import React from "react";
import styled, { css } from "styled-components";
import { EventBus } from "..";
import { points } from "./threejs/SceneSubject";
const TextData = require("../json/text-content.json");
const TextField = styled.div`grid-row:1/1;grid-column:3/3;z-index:1;text-align:right;padding-right:10px;`;
const TextList = styled.ul`list-style:none;`;
const Pgraph = styled.li``;
export default class Banner extends React.Component {
	constructor(props) {
		super(props);
		this.state = { textContent: "", textContent1: "" }
	}
	componentWillMount() {
		EventBus.subscribe(points[0], this.displayOne.bind(this));
		EventBus.subscribe(points[1], this.displayTwo.bind(this));
		EventBus.subscribe(points[2], this.displayThree.bind(this));
		EventBus.subscribe(points[3], this.displayFour.bind(this));
		EventBus.subscribe(points[4], this.displayFive.bind(this));
		EventBus.subscribe(points[5], this.displaySix.bind(this));
	}
	displayOne() {
		this.setState({ textContent: TextData.Banner1.text });
	}
	displayTwo() {
		this.setState({ textContent: TextData.Banner2.text });
	}
	displayThree() {
		this.setState({ textContent: TextData.Banner3.text });
	}
	displayFour() {
		this.setState({ textContent: TextData.Banner4.text });
	}
	displayFive() {
		this.setState({ textContent: TextData.Banner5.text });
	}
	displaySix() {
		this.setState({ textContent: TextData.Banner6.text });
	}

	render() {
		var textData = this.state.textContent;
		return (
			<TextField>
				<TextList>
					{
						textData.split('/n').map((paragraph, i) => <Pgraph key={i}>{paragraph}</Pgraph>)
					}
				</TextList>
			</TextField>
		);
	}
}
