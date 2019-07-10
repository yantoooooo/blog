import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


import {
  LabelBox
} from '../style.js'


class Label extends PureComponent {
  render() {
    const { labelitem } = this.props
    return (
      <div>
        <LabelBox>
          <ul className='tagList'>
            <li>
              {
                labelitem.map((item)=> {
                  return(
                    <Link to='#' key={item.get('label')} className='Tag'>
                      {item.get('label')}
                    </Link>
                  )
                })
              }
            </li>
          </ul>
        </LabelBox>
      </div>

    )
  }
}

const mapState = (state) => ({
  labelitem: state.getIn(['home', 'labelitem'])
})

export default connect(mapState)(Label)