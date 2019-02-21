import React from "react";
import styled, { css } from "styled-components";
import { EventBus } from "..";
import { points } from "./threejs/SceneSubject";
const TextData = require("../json/text-content.json");
const TextField = styled.div`grid-row:2/2;grid-column:1/2;z-index:1;text-align:left;padding-right:10px;padding-left:10px;overflow:scroll; @media (max-width: 110vh) {
    grid-column:1/4;
  }`;
const TextList = styled.ul`list-style:none;`;
const Header = styled.h1`font-family: 'Questrial', sans-serif;font-weight:normal;font-size:3em;`;
const Pgraph = styled.li`font-family: 'Questrial', sans-serif;line-height:1.5em;text-align:left;`;
export default class Banner extends React.Component {
	constructor(props) {
		super(props);
		this.state = { textContent: TextData.Default.text, textContent1: TextData.Default.head }
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
		this.setState({ textContent: TextData.Banner1.text, textContent1: TextData.Banner1.head });
	}
	displayTwo() {
		this.setState({ textContent: TextData.Banner2.text, textContent1: TextData.Banner2.head });
	}
	displayThree() {
		this.setState({ textContent: TextData.Banner3.text, textContent1: TextData.Banner3.head });
	}
	displayFour() {
		this.setState({ textContent: TextData.Banner4.text, textContent1: TextData.Banner4.head });
	}
	displayFive() {
		this.setState({ textContent: TextData.Banner5.text, textContent1: TextData.Banner5.head });
	}
	displaySix() {
		this.setState({ textContent: TextData.Banner6.text, textContent1: TextData.Banner6.head });
	}

	render() {
		var textData = this.state.textContent;
		var headData = this.state.textContent1;
		return (
			<TextField>
				<Header>
					{headData}
				</Header>
				<TextList>
					{
						textData.split('/n').map((paragraph, i) => <Pgraph key={i}>{paragraph}</Pgraph>)
					}
				</TextList>
			</TextField>
		);
	}
}
