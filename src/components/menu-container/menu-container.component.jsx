import React from 'react'

import './menu-container.styles.scss'

import MenuItem from '../menu-item/menu-item.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const MenuContainer = ({ sections }) => (
  <div className='menu-container'>
    {
      sections.map(({ id, ...sectoinProps }) => 
        <MenuItem key={id} {...sectoinProps} />
      )
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(MenuContainer);
