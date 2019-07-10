import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'


import { 
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style'

class Login extends PureComponent {
    render() {
        const { loginStatus } = this.props
        if(!loginStatus) {
            return(
                <LoginWrapper>
                    <LoginBox>
                         <h1 className='title'>Login in</h1>
                         <p className='cccc'>Please enter your account password to login</p>
                         <p className='label'>Phone number</p>
                         <Input placeholder='please enter your account' ref={(input)=>{this.account = input}} />
                         <p className='label'>Password</p>
                         <Input placeholder='please enter your password' type='password' ref={(input)=>{this.password = input}} />
                         <Button onClick={() => this.props.login(this.account,this.password)}>Login in</Button>
                    </LoginBox>  
                </LoginWrapper>
             )
        }else {
            return <Redirect to='/' />
        }
        
    }
}
const mapState = (state) => ({
    loginStatus: state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
    login(account, password) {
        dispatch(actionCreators.login(account.value, password.value))
    }
})

export default connect(mapState, mapDispatch)(Login);