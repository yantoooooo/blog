import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { actionCreators as loginActionCreators } from '../../pages/login/store'

import { connect } from 'react-redux' 
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavItems
} from './style';

// const Header = (props) => {
//     return (
//        
//     )
// }

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Nav>
                    <Link to='/'>
                        <Logo />
                    </Link>
                    <NavItems>
                        <Link to='/'>

                            <NavItem className='active'>Home</NavItem>
                        </Link>
                        <Link to='/posting'>
                            <NavItem >Posting</NavItem>
                        </Link>
                        {
                            this.props.login ? 
                            <NavItem onClick={this.props.logout} >Logout</NavItem> :
                            <Link to='/login'><NavItem>Login</NavItem></Link>
                        }
                        {
                            this.props.login? "" : <Link to='/signup'><NavItem>Sign Up</NavItem></Link>
                        }
                        
                    </NavItems>
                </Nav>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) =>{ 
    return {
        login: state.getIn(['login', 'login'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        logout() {
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);