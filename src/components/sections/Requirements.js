import React, {Fragment} from 'react'
import {SectionRequirements} from './StyledComponents'
import { ReactComponent as Bullet1 } from '../../assets/Ic_Bullet_1.svg'
import { ReactComponent as Bullet2 } from '../../assets/Ic_Bullet_2.svg'
import { ReactComponent as Bullet3 } from '../../assets/Ic_Bullet_3.svg'


const requerimientos = [
	{
		image: <Bullet1/>,
		text: 'Estudiantes avanzados o recibidos de carreras del rubro informático, sistemas o electrónicos',
		id: 1
	},
	{
		image: <Bullet2/>,
		text: 'Inglés intermedio/avanzado',
		id: 2
	},
	{
		image: <Bullet3/>,
		text: 'Conocimiento en tecnologías ágiles (deseable)',
		id: 3
	}
]

const Requirements = () => {
	return(
		<SectionRequirements id="requerimientos">
			<div className='container'>
				<h2>Requerimientos:</h2>
				<div className='container-text'>
				{
					requerimientos.map(requerimiento => (
						<div className='item' key={requerimiento.id}>
							<div>{requerimiento.image}</div>
							<p>{requerimiento.text}</p>
						</div>
					))
				}
				</div>
			</div>
		</SectionRequirements>
	)
}

export default Requirements