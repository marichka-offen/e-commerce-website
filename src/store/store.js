import { compose, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './rootReducer'

const middleWares = [logger]
const composeMiddleware = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composeMiddleware)
