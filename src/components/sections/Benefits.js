import React, { Fragment } from 'react'
import {SectionBenefits} from './StyledComponents'
import { ReactComponent as Hour } from '../../assets/Ic_Hour.svg'
import { ReactComponent as HomeOffice } from '../../assets/Ic_HomeOffice.svg'
import { ReactComponent as Workshops } from '../../assets/Ic_Workshops.svg' 
import { ReactComponent as Snacks } from '../../assets/Ic_DrinkSnacks.svg'
import { ReactComponent as Laptop } from '../../assets/Ic_laptop.svg' 
import { ReactComponent as LastTech } from '../../assets/Ic_brain.svg'

const beneficios = [
	{
		image: <Hour/>,
		title: 'Flexibilidad Horaria',
		id: 1,
	},
	{
		image: <HomeOffice/>,
		title: 'Home Office',
		id: 2,
	},
	{
		image: <Workshops/>,
		title: 'Capacitaciones y workshops',
		id: 3,
	},
	{
		image: <Snacks/>,
		title: 'Snacks, frutas y bebidas gratis',
		id: 4,
	},
	{
		image: <Laptop/>,
		title: 'Semana Remota',
		id: 5,
	},
	{
		image: <LastTech/>,
		title: 'Trabajar en últimas tecnologías',
		id: 6,
	}
]

const Benefits = () => {
	return(
		<SectionBenefits id="benefitst">
			<div className='container'>
				<h2>Entre los beneficios que ofrecemos se encuentran <span className='spanBlue'>;)</span></h2>
				<div className='image-container'>
				{
					beneficios.map( beneficio => (
						<div className='text-container' key={beneficio.id}>
							{beneficio.image}
							<p>{beneficio.title}</p>
						</div>
					))
				}
				</div>
			</div>
		</SectionBenefits>
	)
}

export default Benefits