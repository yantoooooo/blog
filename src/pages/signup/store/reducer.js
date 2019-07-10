import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    signup: false,
})




export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_SIGNUP: 
            return state.set('signup', action.value);
        default:
            return state
    }

}