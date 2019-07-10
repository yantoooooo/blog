import styled from 'styled-components'

export const PostingBg = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 56px;
    background: #fff;
    z-index:-1;
`



export const PostingBox = styled.div`
    width: 800px;
    margin: 0 auto;
    /* text-align: center; */
    .h1 {
        margin-top: 50px;
        font-size: 40px;
        font-weight: 600;
    }
    .Title {
        font-size: 15px;
        margin-top: 20px;
        display: block;
        margin-bottom: 4px;
    }
    .content {
        height: 49px;
        width: 426px;
        border: 1px solid #666666;
        border-radius: 2px;
        background-color: #FFFFFF;
        margin-top: 6px;
        padding-left: 14px;
        font-size: 14px;
        outline: none;
    }
    
    .tieziContent {
        width: 430px;
        padding-left: 10px;
        font-size: 16px;
        height: 100px;
        line-height: 25px;
        overflow: hidden;
        padding-top: 4px;
    }
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