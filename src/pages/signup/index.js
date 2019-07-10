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

class Signup extends PureComponent {
    render() {
        const { signupStatus } = this.props
        if(!signupStatus) {
            return(
                <LoginWrapper>
                    <LoginBox>
                         <h1 className='title'>Sign Up</h1>
                         <p className='cccc'>Please enter your Phone number and your password to login.</p>
                         <p className='label'>Phone number</p>
                         <Input placeholder='please enter your account' ref={(input)=>{this.account = input}} />
                         <p className='label'>Password</p>
                         <Input placeholder='please enter your password' type='password' ref={(input)=>{this.password = input}} />
                         <Button onClick={() => this.props.signup(this.account,this.password)}>Next</Button>
                    </LoginBox>  
                </LoginWrapper>
             )
            } else {
                return <Redirect to='/login' />
            }
    }
}
const mapState = (state) => ({
    signupStatus: state.getIn(['signup','signup'])
})

const mapDispatch = (dispatch) => ({
    signup(account, password) {
        dispatch(actionCreators.signup(account.value, password.value))
    }
})

export default connect(mapState, mapDispatch)(Signup);