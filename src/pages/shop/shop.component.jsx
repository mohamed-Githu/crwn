import React, { useEffect } from "react";
import "./shop.styles.scss";

import { Route } from "react-router-dom";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";

import CollectionsOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../../pages/collection/collection.container";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();    
    // eslint-disable-next-line
  }, []);

  return (
    <div className="shop-page">
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
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default WithSpinner(connect(null, mapDispatchToProps)(ShopPage));
