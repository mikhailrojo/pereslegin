import React from 'react';

import {faFacebook, faYoutube, faVk} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';
const StyledMedia = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const Media = () => (
	<StyledMedia>
		<a href='https://www.youtube.com/user/psychotechnology'>
			<FontAwesomeIcon icon={faYoutube} size='5x' color='red' />
		</a>
		<a href='https://facebook.com'>
			<FontAwesomeIcon icon={faFacebook} size='5x' color='#3b5998' />
		</a>
		<a href='https://vk.com/sociosoft'>
			<FontAwesomeIcon icon={faVk} size='5x' color='rgb(74, 118, 168)' />
		</a>
	</StyledMedia>
);

