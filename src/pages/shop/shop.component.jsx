import React, { useEffect, lazy, Suspense } from "react";
import "./shop.styles.scss";

import { Route } from "react-router-dom";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import Spinner from '../../components/spinner/spinner.component';

const CollectionPageContainer = lazy(() => import("../../pages/collection/collection.container"))
const CollectionsOverviewContainer = lazy(
  () => import("../../components/collection-overview/collection-overview.container")
)

const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();    
    // eslint-disable-next-line
  }, []);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default WithSpinner(connect(null, mapDispatchToProps)(ShopPage));
