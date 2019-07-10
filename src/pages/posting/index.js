import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'
import { 
    PostingBg,
    PostingBox,
    Button
} from './style'


class Posting extends PureComponent {
    render() {
        const { loginStatus } = this.props
        if(loginStatus) {
            return(
                <PostingBg>
                    <PostingBox>
                        <h1 className='h1'>Publish new blog</h1>
                        <label className='Title'>title</label>
                        <input className='content'  ref={(input)=>{this.title = input}}/>
                        <label className='Title'>label</label>
                        <input className='content' ref={(input)=>{this.label = input}}/>
                        <label className='Title'>content</label>
                        <input className='tieziContent' ref={(input)=>{this.content = input}}/>
                        <Button onClick={() => this.props.posting(this.title,this.label,this.content)}>Posting</Button>
                        
                    </PostingBox>
                </PostingBg>
            )
        }else {
            return <Redirect to='/login' />
        }
        
    }
}
const mapState = (state) => ({
    loginStatus: state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
    posting(title,label,content) {
        dispatch(actionCreators.posting(title.value,label.value,content.value))
    }
})


export default connect(mapState, mapDispatch)(Posting);
