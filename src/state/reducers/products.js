import { PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAILURE, LOGOUT } from '../actions'

const initialState = {
  loading: false,
  getProducts: false,
  products: null
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_REQUEST:
      return { ...state, loading: true }
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        getProducts: true,
        products: action.response
      }
    case PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        getProducts: false,
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}

export default products