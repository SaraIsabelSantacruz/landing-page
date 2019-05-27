import React from 'react'
import imageHeader from '../../assets/Ic_ilustra_Hero.png'
import NavBar from './navBar'
import { HeaderWrap } from './StyleComponents'

const Header = props => {

	const [menuOpen, setmenuOpen] = React.useState(false)
	
  const handleOnClick = () => {
    setmenuOpen(!menuOpen)
	}
	
	return (
		<HeaderWrap 
			pageType = {props.pageType}
			id='inicio'
		>
			<NavBar
				pageType = {props.pageType}
				handleOnClick = {handleOnClick}
				menuOpen = {menuOpen}
			/>
			<div className="container">
				<div>
          <h1>
            Bienvenido a tu <br/>
            <span>Entrevista técnica</span> en <br/> 
            <span className='spanGreen'>Wolox</span>
          </h1>
        </div>
        <div>
          <img src={imageHeader}/>  
        </div>
			</div>
		</HeaderWrap>
	)
}

export default Header;