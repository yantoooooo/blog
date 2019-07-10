import axios from 'axios'
import * as constants from './constants'

const getHomeList = (result) => ({
    type:constants.GET_HOME_LIST,
    TieziItem:result.TieziItem,
    labelitem:result.labelitem

})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/homelist.json') 
        // axios.get('http://localhost:4000/random/2/4') 
        .then((data)=> {
            const result = data.data.data
            dispatch(getHomeList(result))
        })
    }
}

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
  })