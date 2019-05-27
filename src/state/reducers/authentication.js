import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions'

const initialState = {
  loading: false,
  loggedIn: false,
  message: null
}

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { 
        ...state, 
        loading: true,
        message: action.message
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loading: false,
        message: action.message
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.message
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}

export default authentication