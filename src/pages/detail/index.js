import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'

import { 
    DetailWrapper,
    Header,
    Introduce,
    DetalContent
} from './style'

class Detail extends PureComponent {
    render() {
        return(
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Introduce>
                    <p className='info'>{this.props.author}</p>
                    <p className='info-label'>{this.props.label}</p>
                    <p className='info-time'>{this.props.time}</p>
                </Introduce>
                <DetalContent>
                    {this.props.content}
                </DetalContent>
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id)
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
    time: state.getIn(['detail', 'time']),
    label: state.getIn(['detail', 'label']),
    author: state.getIn(['detail', 'author']),
});

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    }
});
// withRouter 让Detail有能力获取 Route的所有参数和内容
export default connect(mapState, mapDispatch)(withRouter(Detail));