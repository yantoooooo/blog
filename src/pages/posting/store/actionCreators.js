import axios from 'axios'
import * as constants from './constants'

const changePosting = (result) => ({
    type: constants.CHANGE_POSTING,
    value: result
})


export const posting = (title, label, content) => {
    return (dispatch) => {
      axios.post('/api/tieziItem.json', {
        title,
        label,
        content
      })
      .then((res)=>{
        const result = res.data.data;
        if(result) {
            dispatch(changePosting(result))
        }else {
            alert("失败")
        }
      })
    }
  }
  