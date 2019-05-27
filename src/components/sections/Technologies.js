import React from 'react'
import {SectionTechnologies} from './StyledComponents'
import { ReactComponent as ImageTech } from '../../assets/Ic_Tecnologys.svg'

const Technologies = () => {

	return(
		<SectionTechnologies
			id="technologies"
		>
			<div className='container'>
				<h2>Estamos buscando incorporar gente increíble para estas tecnologías:</h2>
				<ImageTech/>
			</div>
		</SectionTechnologies>
	)
}

export default Technologies