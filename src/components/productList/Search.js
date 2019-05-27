import React, {Fragment} from  'react'
import { connect } from 'react-redux'
import { searchPrducts } from '../../state/actionsCreators'
import Input from '../componentsForm/Input'
import {FormWarp} from './StyledComponents'

const Search = props => {
  let { products, handleSearchproducts, onClick } = props

  const [query, setQuery] = React.useState('')
  const [filteredList, setFilteredList] = React.useState(products)
  
  React.useMemo(() => {
		const result = products && products.filter(product => {
			return product.name
			.toLowerCase()
			.includes(query.toLowerCase())
		})
		setFilteredList(result)
	}, [products, query])
  

	const handleSubmit = eve => {
		eve.preventDefault()
		handleSearchproducts(filteredList)
	}
	const handleOnChange = ele => setQuery(ele.target.value)

	return(
		<Fragment>
      <button onClick = { onClick } className='btn-primary --button-logout'>LOGOUT</button>
			<FormWarp
				onSubmit = {handleSubmit}
			>
				<Input
					ref = {props.ref}
					type = 'text'
					name = 'search'
					value = {query}
					onChange = { handleOnChange }
					placeholder='Buscar el producto...'
				/>
			</FormWarp>
		</Fragment>
	)
}

const mapDispatchToProps = dispatch => ({
  handleSearchproducts (list) {
    dispatch(searchPrducts(list))
  }
})

export default connect(null, mapDispatchToProps)(Search)
