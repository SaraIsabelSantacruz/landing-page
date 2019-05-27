import React, { Fragment } from 'react'
import {SelectWrap} from './StyledComponents'

const Select = props => {
  return(
    <Fragment>
      <SelectWrap>
				<label>{ props.label }</label>
				<select 
					name={props.name}
					value={ props.value} 
					onChange={ props.onChange }
				>
					{ 
						props.edades.map(edad => {
							return(
								<option key={edad}>{ edad }</option>
							)
						})
					}
				</select>
			</SelectWrap>
    </Fragment>
  )
}

export default Select