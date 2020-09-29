import React, { useEffect } from 'react'
import './shop.styles.scss'

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'

import { Route } from 'react-router-dom'
import { convertCollectionsSnapshotToMap, db } from '../../firebase/firebase.utils'

import { setShopData } from '../../redux/shop/shop.actions'
import { connect } from 'react-redux'

const ShopPage = ({ match, setShopData }) => {
  useEffect(() => {
    const unsubscribe = () => {
      const collectionsRef = db.collection('collections');
      collectionsRef.onSnapshot(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        setShopData(collectionsMap);
      })
    }

    return unsubscribe();
  })

  return (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
)}

const mapDispatchToProps = dispatch => ({
  setShopData: collectionsMap => dispatch(setShopData(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);