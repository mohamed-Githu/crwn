import React from 'react'
import './collection-overview.styles.scss'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForOverview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component'

const CollectionOverView = ({ collections }) => (
  <div className="collection-overview">
    {
      collections.map(({ id, ...collectionProps }) => 
        <CollectionPreview key={id} {...collectionProps} />
      )
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForOverview
});

export default connect(mapStateToProps)(CollectionOverView);