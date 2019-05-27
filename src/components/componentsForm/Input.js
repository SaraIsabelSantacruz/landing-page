import React, { Fragment } from 'react'
import {CheckWrap, InputContainer} from './StyledComponents'

const Input = props => {

  return(
    <Fragment>
			{props.label ? 
				<CheckWrap
					checked = {props.checked}
				>
					<InputContainer
						ref = {props.setInputRef}
						name={props.name}
						type={props.type}
						value={props.value}
						onChange={props.onChange}
						placeholder = {props.placeholder}
					/>
					<label className='terminos'>{props.label}</label>
				</CheckWrap>
				:
				<InputContainer
					ref = {props.setInputRef}
					name={props.name}
					type={props.type}
					value={props.value}
					onChange={props.onChange}
					placeholder = {props.placeholder}
				/>
			}
    </Fragment>
  )
}

export default Input