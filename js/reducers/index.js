import {combineReducers} from 'redux'
import statePropsReducer from './statePropsReducer'
import memberReducer from './memberReducer'


export default combineReducers({
  StateProps: statePropsReducer,
  Member: memberReducer
})