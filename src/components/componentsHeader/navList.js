import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import  { NavListContainer }  from './StyleComponents'

const NavList = props => {
	return(
		<NavListContainer
			isOpen = {props.menuOpen}
		>
			<li className="item-nav">
        <Link 
          to='/#inicio'
          scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
        >
          Inicio
        </Link>
      </li>
			<li className="item-nav">
        <Link 
          to='/#technologies'
          scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
        >
          Tecnologías
        </Link>
      </li>
			<li className="item-nav">
        <Link 
          to='/#benefitst'
          scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
        >
          Beneficios
        </Link>
      </li>
			<li className="item-nav">
        <Link 
          to='/#requerimientos'
          scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
        >
          Requerimientos
        </Link>
      </li>
			<li className="item-nav login">
        <Link 
          to="/Login" 
          className='btn-primary button-login' 
          onClick = {props.handleOnClick}>Login
        </Link>
			</li>
		</NavListContainer>
	)
}

export default NavList