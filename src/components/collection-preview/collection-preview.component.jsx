import React from 'react'

import './collection-preview.styles.scss'

import CollectionItem from '../collection-item/collection-item.component'

import { withRouter } from 'react-router-dom'

const CollectionPreview = ({ title, items, history }) => (
  <div className='collection-preview'>
    <div className="collection-preview__header">
      <h1 className="collection-preview__title" onClick={() => history.push(`/shop/${title}`)}>
        {title}
      </h1>
      <button className="collection-preview__button" onClick={() => history.push(`/shop/${title}`)}>
        See All <span>&rarr;</span>
      </button>
    </div>
    <div className="collection-preview__items">
      {
        items
        .filter((item, i) => i < 4)
        .map((item) => <CollectionItem key={item.id} item={item} slide /> )
      }
    </div>
  </div>
)

export default withRouter(CollectionPreview);
