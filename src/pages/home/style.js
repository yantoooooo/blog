import styled from 'styled-components'


export const HomeWrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
`

export const ListItem = styled.div`
    border-bottom: 1px dotted #e4e6eb;
    background-color: #fff;
    display: flex;
    position: relative;
    width: 1000px;
`

export const CommentsBox = styled.div`
    width: 50px;
    height: 26px;
    background-color: #efefef;
    margin: 26px 0 20px 20px;
    text-align: center;
    line-height: 26px;
`

export const TitleItem = styled.div`
  .title {
    padding-left: 28px;
    margin-top: 16px;
    font-size: 14px;
    color:#448aff
    .a {
        color: #448aff
    }
  }
  .content {
    padding-left: 28px;
    width: 600px;
    margin-top: 20px;
    font-size: 12px;
    margin-bottom: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
`



export const TieziTitle = styled.div`
    position: absolute;
    right: 200px;
    top: 16px;
    .a {
        color: #fff;
        background-color: #448aff;
        font-size: 14px;
        display: inline-block;
        padding: 3px 9px;
        border-radius: 4px;
        font-size: 14px;
        margin-left: 5px;
    }
`



export const TieziAuthor = styled.div`
    position: absolute;
    right: 200px;
    font-size: 14px;
    bottom: 20px;
    .a {
        text-decoration: none;
        color: #999;
    }
`
export const TieziTiem = styled.div`
    position: absolute;
    right: 20px;
    font-size: 14px;
    bottom: 32px;
    .time {
        text-decoration: none;
        color: #999;
    }
`


export const LabelBox = styled.div`
    margin: 0 auto;
    height: 34px;
    line-height: 34px;
    margin-top: 60px;   
    margin-bottom: 10px;
    width:1400px
    .tagList {
        list-style: none;
        background-color: #fff;
        display: flex;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width:1000px
        .Tag {
            text-decoration: none;
            display: inline-block;
            padding: 0 10px;
            background-color: #448aff;
            border-radius: 4px;
            color: white;
            margin-right: 10px;
        }
    }
`




export const BackTop = styled.div`
    position: fixed;
    font-size: 22px;
    right: 200px;
    bottom: 30px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 50%;
`