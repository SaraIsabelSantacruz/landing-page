import React, {Fragment} from  'react'
import { connect } from 'react-redux'
import { searchPrducts } from '../../state/actionsCreators'
import Input from '../componentsForm/Input'
import {FormWarp} from './StyledComponents'

const useSearchProducts = products => {
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

	return { query, setQuery, filteredList}
}

const Search = props => {
	let { products, handleSearchproducts, onClick } = props
	const { query, setQuery, filteredList } = useSearchProducts(products)

	const handleSubmit = eve => {
		eve.preventDefault()
		handleSearchproducts(filteredList)
	}
	const handleOnChange = ele => setQuery(ele.target.value)

	return(
		<Fragment>
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
			<button onClick = { onClick }>LOGOUT</button>
		</Fragment>
	)
}

const mapDispatchToProps = dispatch => ({
  handleSearchproducts (list) {
    dispatch(searchPrducts(list))
  }
})

export default connect(null, mapDispatchToProps)(Search)
