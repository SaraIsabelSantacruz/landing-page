import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './reducers/rootReducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authentication']
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)


	let store = createStore(
		persistedReducer,
		composeWithDevTools(applyMiddleware(thunk))
	)
	let persistor = persistStore(store)
	export 	{ store, persistor }

