import React from 'react'
import styled from 'styled-components' 
import backgroundFooter from '../../assets/backgrounds/Bg_Header.png'
import { ReactComponent as FooterImg } from '../../assets/Ic_Wolox_Footer.svg'

const FooterContainer = styled.footer`
	height: ${props => props.pageType === 'home' ? '400px' : '50px'};
	text-align: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url(${backgroundFooter});

	.container{
		display: ${props => props.pageType === 'home' ? 'block' : 'none'};
		height: 90%;
	}

	.container h1{
		font-weight: 600;
	}

	.container a{
		color: var(--white);
    font-size: 20px;
    font-weight: 600;
    padding: 15px 30px;
	}
`

const Footer = props => {
	return(
		<FooterContainer pageType = {props.pageType}>
			<div className='container'>
				<h1>Gracias por <span className='spanBlue'>completar el ejercicio</span></h1>
				<h2>Te invitamos a ver más información</h2>
				<a href="https://www.wolox.com.ar/" className='btn-secondary'>Conocer más</a>
			</div>
			<FooterImg />
		</FooterContainer>
	)
}

export default Footer