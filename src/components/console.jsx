import React from 'react';
import styled from 'styled-components';
import pando1 from '../assets/pando1.png';
import dot1 from '../assets/dot.png';
const Clock = styled.a`
color:black;text-decoration:none;position:absolute;top:0px;left:0px;grid-column:1/3;grid-row:1/2;z-index:2;text-align:left;padding-right:10px;
`;
const Label = styled.div`
margin:0;padding:0;font-size:0.8em;font-size:.8em;font-family: 'Cutive Mono', monospace;line-height:1.1em;
`;
const Pando = styled.img`
width:auto;height:30px;padding-right:3px;filter:contrast(5.7);
`;
const Dot = styled.img`
width:auto;height:10px;position:relative;top:4px;filter:contrast(5.7);padding-right:5px;margin-bottom:5px;
`;
export default class Console extends React.Component {
	constructor() {
		super()
		this.state = { time: new Date() }
	}
	currentTime() {
		this.setState({
			time: new Date()
		})
	}
	componentWillMount() {
		setInterval(() => this.currentTime(), 500)
	}
	render() {
		return (
			<Clock href='https://pando.systems/'>

				<div><Pando src={pando1} /><Dot src={dot1} /></div>

				<Label>{this.state.time.getFullYear() +
					":" + (1 + this.state.time.getMonth()) +
					":" + this.state.time.getDate() +
					":" + this.state.time.toLocaleTimeString('en-US', { hour12: false })}
				</Label>
			</Clock >
		);
	}
}