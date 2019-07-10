import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Label from './component/Label'
import List from './component/List'
import { actionCreators } from './store'
import {
    BackTop
} from './style'

import {
    HomeWrapper
} from './style.js'

class Home extends PureComponent {

    handleScrollTop() {
        window.scrollTo(0,0)
    }
    render() {
        return(
            <HomeWrapper>
                <Label />
                <List />
                { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>↑</BackTop>: null}
                
            </HomeWrapper>
        )
    }
    componentDidMount() {
       this.props.changeHomeData()
       this.bindEvents()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home','showScroll'])
})

const mapDispath = (dispatch) => ({
    changeHomeData() {
       dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true))
        }else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

export default connect(mapState, mapDispath)(Home)