import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect/dist/core';

const Container = styled.div`
	font-family: var(--font-code);
	font-size: 0.8rem;
	text-align: left;
	color: var(--color-text);
	line-height: 15px;
`;

const Typing = () => {
	const typeRef = useRef(null);

	useEffect(() => {
		const typeWriter = new Typewriter(typeRef.current, {
			autoStart: true,
			loop: true,
		});

		typeWriter
			.start()
			.pauseFor(6500)
			.typeString('Hi there,<br/>')
			.pauseFor(500)
			.typeString("I'm Prem.<br/>")
			.pauseFor(1000)
			.typeString('Based in Dadra, India.<br/>')
			.pauseFor(1000)
			.typeString('Self-thought front-end web developer.<br/><br/>')
			.pauseFor(100)
			.typeString('I use Pure HTML/CSS/JS.<br/><br/>')
			.pauseFor(500)
			.typeString('I love Javascript')
			.deleteChars(9)
			.pauseFor(500)
			.typeString('React.js.')
			.deleteChars(10)
			.pauseFor(500)
			.typeString('Redux.js.')
			.deleteChars(9)
			.pauseFor(500)
			.typeString('TailwindCss.')
			.deleteChars(12)
			.pauseFor(1000)
			.typeString('Welcome To My Personal Portfolio.<br/><br/>')
			.pauseFor(1000)
			.typeString(
				"<span style='color: var(--color-main);'><strong>Don't Forget To Say Hi!.</strong></span>"
			)
			.pauseFor(5000)
			.deleteAll(0);
	});

	return (
		<Container>
			<div ref={typeRef}></div>
		</Container>
	);
};

export default Typing;
