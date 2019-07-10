import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    height: 60px;
    background-color: #fff;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
`



export const Nav = styled.div`
    position: relative;
    width: 1200px;
    height: 100%;
    margin: 0 auto;
`

export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 150px;
    height: 60px;
    background: url(${logoPic});
    background-size: 150px 56px;
`
export const NavItems = styled.div`
    float: right;
`

export const NavItem = styled.div`
    &.active {
        color: #fff;   
        background: #448aff
    }
    line-height: 60px;
    padding: 0px 26px;
    color: #333;
    font-weight: 500;
    display: inline-block;
`