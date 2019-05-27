import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo_full_color.svg'
import NavList from './navList'
import  { NavBarContainer, MenuButton }  from './StyleComponents'

const NavBar = props => {
	return(
		<NavBarContainer pageType = {props.pageType}>
			<Link to="/" className="image-container"><img src={Logo}/></Link>
			<MenuButton onClick = {props.handleOnClick}>menú</MenuButton>
			<NavList menuOpen={props.menuOpen}/>
		</NavBarContainer>
	)
}

export default NavBar