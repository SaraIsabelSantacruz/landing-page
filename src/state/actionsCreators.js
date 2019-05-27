import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,

	PRODUCTS_REQUEST,
	PRODUCTS_SUCCESS,
	PRODUCTS_FAILURE,

	SEARCH_PRODUCTS,

	LOGOUT
} from './actions'

const BASE_API = 'http://localhost:3000'

export const onLogin = values => {
	return async dispatch => {
		const message = 'Login request'
		dispatch({ type: LOGIN_REQUEST, message })
		try {
			let res = await fetch(`${BASE_API}/sign_in`, {
				method: 'POST',
				body: JSON.stringify(values)
			})
			const message = 'Login success'
			const response = await res.json()
			return dispatch({ type: LOGIN_SUCCESS, response, message })
		} 
		catch (error) {
			console.log(error)
			const message = 'Login fail'
			dispatch({ type: LOGIN_FAILURE, message })
		}
	}
}

export const getProducts = () => {
	return async dispatch => {
		dispatch({ type: PRODUCTS_REQUEST })
		try {
			let res = await fetch(`${BASE_API}/products`, { method: 'GET' })
			const response = await res.json()
			return setTimeout(() => { dispatch({ type: PRODUCTS_SUCCESS, response })}, 500)
		} 
		catch (error) {
			console.log(error)
			dispatch({ type: PRODUCTS_FAILURE })
		}
	}
}

export const searchPrducts = filteredList => dispatch => { dispatch({ type: SEARCH_PRODUCTS, filteredList }) }
export const logout = () => dispatch => { dispatch({ type: LOGOUT })}