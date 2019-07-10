import axios from 'axios'
import * as constants from './constants';


const changeDetail = (title, content, label, author, time) => ({
    type:constants.CHANGE_DETAIL,
    title,
    content,
    label,
    author,
    time
})
export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id='+id)
        .then((res)=> {
            const result = res.data.data
            dispatch(changeDetail(result.title, result.content, result.label, result.author, result.time))
        })
    }
}  
