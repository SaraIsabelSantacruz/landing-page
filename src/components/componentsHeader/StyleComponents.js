import styled from 'styled-components'
import backgroundNav from '../../assets/backgrounds/Bg_Header.png'

export const HeaderWrap = styled.header`
	height: ${props => props.pageType === 'home' ? '100vh' : '90px'};
	top: 0;
	position: relative;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url(${backgroundNav});

	.container{
		position: relative;
		display: ${props => props.pageType === 'home' ? 'flex' : 'none'};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
		text-align: center;
		width: 80%;
	}

	.container img{
		display: none;
	}

	.container h1{
		margin: 0;
		text-align: start;
	}
	
	@media (min-width: 680px) {
    .container{
			width: 100%;
			display: ${props => props.pageType === 'home' ? 'flex' : 'none'};
			height: calc(100% - 90px);
			top: 90px;
			left: 0;
			transform: none;
			align-items: center;
			justify-content: space-around;
		}

		.container img{
			display: block;
		}
	}
`

export const NavListContainer = styled.ul`
  height: calc(100vh - 90px);
  list-style: none;
  display:  ${props => props.isOpen ? 'flex' : 'none'};
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  top: 90px;
  width: 100%;
	background: #00a7e8e6;
	margin: 0;
  color: var(--white);
	text-align: center;
	font-size: 30px;
	
	@media (min-width: 680px) {
    display: flex;
    background: white;
    color: var(--Deep-Black);
    flex-direction: row;
    position: relative;
    font-size: 20px;
    height: 100%;
    top: 0;
		width: auto;
    align-items: center;
    width: 60%;

    .button-login{
      color: var(--Cerulean)
    }
  }
`

export const NavBarContainer = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 90px;
  justify-content: space-around;
  position: fixed;
  width: 100%;
	z-index: 2;	
	background-size: cover;
	background-image: url(/static/media/Bg_Header.d6b135ac.png);
	background-color: var(--white);
	.image-container img{
		height: 30px;
	}
`

export const MenuButton = styled.button`
	border: 1px solid black;
	@media (min-width: 680px) {
		display:none;
	}
`