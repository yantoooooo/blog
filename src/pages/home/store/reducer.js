import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    labelitem: [],
    TieziItem: [],
    showScroll: false
})

const getHomeList = (state, action) => {
    return state.merge({
        'labelitem': fromJS(action.labelitem),
        'TieziItem': fromJS(action.TieziItem)
    });
}


export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.GET_HOME_LIST:
            return getHomeList(state, action)

        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show)
        default:
            return state
    }

}