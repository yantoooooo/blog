import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
})





export default (state = defaultState, action) => {
    switch(action.type) {
       
        case constants.CHANGE_DETAIL: 
            return state.merge({
                title: action.title,
                content: action.content,
                label: action.label,
                author: action.author,
                time: action.time,
                comment: action.comment,
            })

        default:
            return state
    }

}