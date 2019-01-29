import React from 'react';
import styled from 'styled-components';
import pando1 from '../assets/pando1.png';
import dot1 from '../assets/dot.png';
const Clock = styled.div`
position:absolute;bottom:0px;right:0px;grid-column:3/3;grid-row:2/2;z-index:2;text-align:right;padding-right:10px;
`;
const Label = styled.div`
margin:0;padding:0;
`;
const Pando = styled.img`
width:auto;height:30px;padding-right:3px;filter:contrast(5.7);
`;
const Dot = styled.img`
width:auto;height:12px;position:relative;top:4px;filter:contrast(5.7);padding-right:5px;margin-bottom:5px;
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
			<Clock>
				<div><Pando src={pando1} /><Dot src={dot1} /></div>
				<Label>pando.systems</Label>
				<Label>{this.state.time.getFullYear() +
					":" + this.state.time.getMonth() +
					":" + this.state.time.getDate() +
					":" + this.state.time.toLocaleTimeString('en-US', { hour12: false })}
				</Label>
				<Label>uxd|sound-design|webgl</Label>
			</Clock >
		);
	}
}