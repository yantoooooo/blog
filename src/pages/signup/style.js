import styled from 'styled-components'

export const LoginWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 56px;
    background: #fff;
    z-index:-1;
`

export const LoginBox = styled.div`
    width: 440px;
    height: 460px;
    margin: 0 auto;
    margin-top: 160px;
    .label {
        margin-top: 30px;
        height: 21px;
        color: #333333;
        font-size: 15px;
        font-weight: 600;
        line-height: 21px;
    }
    .title {
        height: 56px;
        width: 440px;
        color: #333333;
        font-size: 40px;
        font-weight: 600;
        line-height: 56px;
    }
    .cccc {
        margin-top: 20px;
        color: #333333;
        font-size: 20px;
        line-height: 28px;
    }
`


export const Input = styled.input`
    height: 49px;
    width: 426px;
    border: 1px solid #666666;
    border-radius: 2px;
    background-color: #FFFFFF;
    margin-top: 12px;
    padding-left: 14px;
    font-size: 14px;
    outline: none;
`

export const Button = styled.button`
    margin-top: 30px;
    height: 50px;
    width: 440px;
    border-radius: 2px;
    background-color: #448aff;
    text-align: center;
    line-height: 50px;
    color: #fff;
    cursor: pointer;
    border: 0 solid #000;
    font-size: 16px;
`