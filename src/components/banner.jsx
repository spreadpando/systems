import React from "react";
import styled, { css } from "styled-components";
import { EventBus } from "..";
import { points } from "./threejs/SceneSubject";
const TextData = require("../json/text-content.json");
const ParentField = styled.div`overflow:hidden;grid-row:2/3;grid-column:1/2;`;
const TextField = styled.div`height:100%;position:relative;z-index:2;text-align:left;margin-right:-50px;padding-right:50px;padding-left:10px;overflow-y:scroll; @media (max-width: 110vh) {
    grid-column:1/4;
  }`;
const Header = styled.h1`font-family: 'Questrial', sans-serif;font-weight:normal;font-size:3vw;`;
const Pgraph = styled.p`font-family: 'Questrial', sans-serif;line-height:1.5em;text-align:left;`;
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
			<ParentField>
				<TextField>
					<Header>
						{headData}
					</Header>

					{
						textData.split('/n').map((paragraph, i) => <Pgraph key={i}>{paragraph}</Pgraph>)
					}

				</TextField>
			</ParentField>
		);
	}
}
