import axios from 'axios'
import * as constants from './constants'



// export const login = (account, passsword) => {
//   return (dispatch) => {
//     axios.get('/api/login.json?account=' + account + '&password' + passsword)
//     .then((res)=>{
//       const result = res.data.data;
//       if(result) {
//           dispatch(changeLogin())
//       }else {
//           alert("失败")
//       }
//     })
//   }
// }

const changesignup = () => ({
  type: constants.CHANGE_SIGNUP,
  value: true
})



export const signup = (account, passsword) => {
  return (dispatch) => {
    axios.post('/api/signup.json', {
      account,
      passsword
    })
    .then((res)=>{
      dispatch(changesignup())
    })
  }
}



