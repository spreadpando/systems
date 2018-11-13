import React from 'react';
import styled from 'styled-components';
import pando1 from '../assets/pando1.png';
import dot1 from '../assets/dot.png';
const Clock = styled.div`position:fixed;margin-right:2px;bottom:0px;right:0;font-size:.7em;font-family: 'Anonymous-pro', monospace;font-weight:light;line-height:.1em;text-align:right;
`;
const Pando = styled.img`
width:auto;height:20px;padding-right:3px;margin-bottom:-5px;filter:contrast(5.7);stroke-width:20px;
`;
const Dot = styled.img`
width:auto;height:7px;position:relative;top:4px;filter:contrast(5.7);padding-right:5px;
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
				<p>pando.systems</p>
				<p>{this.state.time.getFullYear() +
					":" + this.state.time.getMonth() +
					":" + this.state.time.getDate() +
					":" + this.state.time.toLocaleTimeString('en-US', { hour12: false })}
				</p>
				<p>uxd|sound-design|webgl</p>

			</Clock >
		);
	}
}