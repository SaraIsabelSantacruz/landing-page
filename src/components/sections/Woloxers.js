import React from 'react'
import {SectionWoloxers} from './StyledComponents'
import woloxer from '../../assets/img_woloxer.png'
import { ReactComponent as Twitter } from '../../assets/twitter-logo.svg'

const Woloxers = () => {
	return(
		<SectionWoloxers id="woloxers">
			<div className='container'>
				<div className='followers'>
					<div className='container-text'>
						<h1><span className='spanGreen'>350 + </span> <span className='spanBlue'>Woloxers</span></h1>
						<div className='twitter-container'><Twitter className='twitter'/><span>@Wolox</span></div>
						<a href="https://twitter.com/wolox" className='btn-primary'>Siguénos</a>
					</div>
					<img src={woloxer}/>
				</div>
				<h2>Trabajamos para <span className='spanBlue'>convertir</span> <span className='spanGreen'>ideas</span> en productos</h2>
			</div>
		</SectionWoloxers>
	)
}

export default Woloxers