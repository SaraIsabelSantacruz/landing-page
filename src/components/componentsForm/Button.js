import React, { Fragment } from 'react'
import {ButtonContainer} from './StyledComponents'

const Button = props => {
  return(
		<ButtonContainer
			type={props.type}
			disabled = {props.disabled}
			className='btn-primary'
		>
			{props.text}
		</ButtonContainer>
  )
}

export default Button