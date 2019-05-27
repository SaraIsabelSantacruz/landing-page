import React from 'react'
import { FormFade} from './StyledComponents'
import Input from './Input'
import Select from './Select'
import Button from './Button'

const edades = [ "20 - 25", "26 - 30", "31 - 35", "36 - 40", "50 +" ]

const Form = props => {
	return(
		<FormFade
			onSubmit={props.handleSubmit}
		>
			<Input
				setInputRef = {props.setInputRef}
				name="nombre"
				type="text"
				value={props.formValues.nombre}
				onChange={props.handleOnChange}
				placeholder = 'Nombre'
			/>
			<Input
				setInputRef = {props.setInputRef}
				name="apellido"
				type="text"
				value={props.formValues.apellido}
				onChange={props.handleOnChange}
				placeholder = 'Apellido'
			/>
			<Input
				setInputRef = {props.setInputRef}
				name="email"
				type="mail"
				value={props.formValues.correo}
				onChange={props.handleOnChange}
				placeholder = 'Correo'
			/>
			<Select 
				setInputRef = {props.setInputRef}
				name="edad"
				value={props.formValues.edad} 
				onChange={props.handleOnChange}
				edades = {edades}
				label = {'Edad'}
			/>
			<Input
				setInputRef = {props.setInputRef}
				name = 'check'
				type='checkbox'
				checked = {props.formValues.check}
				onChange={props.handleOnChange}	
				label={'Acepto que he leído los términos y condiciones'}
			/>
			<Button 
				type="submit" 
				disabled = {props.disabled}
				text = 'Enviar'
			/>
		</FormFade>
	)
}


export default Form