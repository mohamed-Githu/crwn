import React from 'react'

import './menu-container.styles.scss'

import MenuItem from '../menu-item/menu-item.component'

export class MenuContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      sections: [
        {
          title: 'hats',
          imgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
        },
        {
          title: 'jackets',
          imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
        },
        {
          title: 'sneakers',
          imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
        },
        {
          title: 'womens',
          imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
        },
        {
          title: 'mens',
          imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
        }
      ]
    }
  }

  render() {
    return (
      <div className='menu-container'>
        {
          this.state.sections.map(({ id, ...sectoinProps }) => 
            <MenuItem key={id} {...sectoinProps} />
          )
        }
      </div>
    )
  }
}

export default MenuContainer
