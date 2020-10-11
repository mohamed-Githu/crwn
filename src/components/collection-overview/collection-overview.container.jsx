import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsFetching } from "../../redux/shop/shop.selectors";
import CollectionsOverview from "./collection-overview.component";
import WithSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionsFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
