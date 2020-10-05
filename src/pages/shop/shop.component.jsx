import React, { useEffect } from "react";
import "./shop.styles.scss";

import { Route } from "react-router-dom";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCollectionsFetching,
  selectIsColletionsLoaded,
} from "../../redux/shop/shop.selectors";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({
  match,
  isCollectinosLoaded,
  isCollectionFetching,
  fetchCollectionsStartAsync,
}) => {
  useEffect(() => {
    fetchCollectionsStartAsync();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={() => (
          <CollectionOverviewWithSpinner isLoading={isCollectionFetching} />
        )}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner
            isLoading={!isCollectinosLoaded}
            {...props}
          />
        )}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionsFetching,
  isCollectinosLoaded: selectIsColletionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default WithSpinner(
  connect(mapStateToProps, mapDispatchToProps)(ShopPage)
);
