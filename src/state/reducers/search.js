import { SEARCH_PRODUCTS, LOGOUT } from '../actions'

const initialState = {
  filteredList: []
}

const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      return { 
        ...state,
        filteredList: action.filteredList
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}

export default search