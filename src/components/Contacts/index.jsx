import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2em;
	
	ul {
		list-style: none;
		padding: 30px;
	}
`;

export const Contacts = () => (
	<StyledSection>
		<ul>
			<li>pereslegin@pereslegin.ru</li>
			<li>+7-921-123-45-67</li>
		</ul>
	</StyledSection>
);
