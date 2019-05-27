import React from 'react'
import {ContainerList, CardContainer} from './StyledComponents'

const List = props => {
  return(
		<ContainerList>
			{
				props.products && props.products.map(product => {
					return(
						<CardContainer key={product.id}>
							<div className='image-container'><img src={product.imagen}/></div>
							<h4>{product.name}</h4>
							<p>{product.description}</p>
						</CardContainer>
					)
				})
      }
		</ContainerList>
	)
}

export default List