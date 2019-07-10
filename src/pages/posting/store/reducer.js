import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    tieziItem:[]
})




export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_POSTING: 
            return state.set('tieziItem', action.value);
        default:
            return state
    }

}