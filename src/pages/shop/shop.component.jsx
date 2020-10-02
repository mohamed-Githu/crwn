import React, { useEffect, useState } from 'react'
import './shop.styles.scss'

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'

import { Route } from 'react-router-dom'
import { convertCollectionsSnapshotToMap, db } from '../../firebase/firebase.utils'

import { setShopData } from '../../redux/shop/shop.actions'
import { connect } from 'react-redux'

import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, setShopData }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = () => {
      const collectionsRef = db.collection('collections');
      collectionsRef.onSnapshot(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        setShopData(collectionsMap);
        setIsLoading(false);
      })
    }

    return unsubscribe();
  })

  return (
  <div className="shop-page">
    <Route exact path={`${match.path}`} 
      render={() => <CollectionOverviewWithSpinner isLoading={isLoading} />} 
    />
    <Route exact path={`${match.path}/:collectionId`} 
      render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />}
    />
  </div>
)}

const mapDispatchToProps = dispatch => ({
  setShopData: collectionsMap => dispatch(setShopData(collectionsMap))
})

export default WithSpinner(connect(null, mapDispatchToProps)(ShopPage));