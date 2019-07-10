import styled from 'styled-components'


export const DetailWrapper = styled.div`
    width: 1400px;
    position: relative;
    margin: 100px auto;
    background-color: #fff;
    padding: 30px 20px;
    height: 100%;
`

export const Header = styled.div`
    font-size: 26px;
    color: #111;
`
export const Introduce = styled.div`
    display: flex;  
    p {
        height: 20px;
        line-height: 20px;
        padding: 4px 10px;
        margin-top: 14px;
        margin-right: 80px;
    }
    .info {
        color: #448aff
    }
    .info-label{
        background-color: #448aff;
        border-radius: 4px;
        font-size: 14px;
        color: #fff;
    }
    .info-time {
        color: #333;
    }
`



export const DetalContent = styled.div`
    padding-top: 40px;
    width: 800px;
    font-size: 16px;
    line-height: 28px;
    color: #333;
    padding-bottom: 100px;
`