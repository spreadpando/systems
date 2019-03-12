﻿import React from "react";
import styled, { css } from "styled-components";
const Foot = styled.div`position:fixed;bottom:0;height:5%;width:100%;grid-column:1/5;background-color:black;z-index:2;margin-left:-10px;text-align:center;opacity:.7;`;
const SocialLink = styled.a`color:white;text-decoration:none;font-family: 'Cutive Mono';padding-right:5%;`;
const CP = styled.span`position:absolute;font-size:.7em;color:white;text-decoration:none;font-family: 'Cutive Mono';right:10px;bottom:5px;`;

export default class Footer extends React.Component {
	render() {
		return (
			<Foot>
				<SocialLink href='https://www.soundcloud.com/spreadpando'>soundcloud</SocialLink>
				<SocialLink href='https://www.github.com/spreadpando'>github</SocialLink>
				<SocialLink href='https://www.instagram.com/spreadpando'>instagram</SocialLink>
				<SocialLink href='https://www.facebook.com/spreadpando'>facebook</SocialLink>
				<CP> &copy; Pando Systems Design</CP>
			</Foot>
		);
	}
}