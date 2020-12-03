import React from 'react';
import './styles.css';

import {Link} from "react-router-dom";

import styled from 'styled-components';
import background from './assets/background.png';

const StyledIntro = styled.div`
	height: 100vh;
	background: url(${background}) no-repeat;
	background-size: cover;
	background-position: center;
`;

export const Intro = () => (
	<StyledIntro>
		<nav>
			<div>
				<Link to='/contacts'>
					Контакты
				</Link>
			</div>
			<div>
				<Link to='/calendar'>
					Календарь</Link></div>
			<div>
				<Link to='/media'>
					Медиа
				</Link>
			</div>
			<div>
				<a href='https://vk.com/market-9685658?section=album_4'>
					Маркет
				</a>
			</div>
		</nav>
	</StyledIntro>
);
