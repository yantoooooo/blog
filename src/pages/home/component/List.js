import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  ListItem,
  CommentsBox,
  TitleItem,
  TieziTitle,
  TieziAuthor,
  TieziTiem

} from '../style.js'

class List extends PureComponent {
  render() {
    const { list } = this.props
    return (
      <div>
        {
          list.map((item) => {
            return (
                <ListItem  key={item.get('title')}>
                {/* 评论数量 */}
                <CommentsBox>
                  <span>{item.get('comment')}</span>
                </CommentsBox>
                {/* 标题和内容简介 */}
                <TitleItem>
                  <p className='title'>
                    <Link className='a' to={'/detail/' + item.get('id')}>{item.get('title')}</Link>
                  </p>
                  <p className='content'>
                  {item.get('content')}
                  </p>
                </TitleItem>
                <TieziTitle>
                  <p className='a'>{item.get('label')}</p>
                </TieziTitle>
                <TieziAuthor>
                  <p className='a'>{item.get('author')}</p>
                </TieziAuthor>
                <TieziTiem>
                  <p className='time'>
                  {item.get('time')}
                  </p>
                </TieziTiem>
              </ListItem>
            )
          })
        }
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'TieziItem']),
  labelitem: state.getIn(['home', 'labelitem'])
})



export default connect(mapState)(List)