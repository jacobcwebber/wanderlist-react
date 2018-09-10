import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import { allDestinationsSelector } from "../../reducers/destination";
import FindDestinationCtA from "../ctas/FindDestinationCtA";

const DashboardPage = ({ isConfirmed, destinations }) => (
  <div>
    {!isConfirmed && <ConfirmEmailMessage />}

    {destinations.length === 0 && <FindDestinationCtA />}
  </div>
);

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  destinations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: state.user.confirmed,
    destinations: allDestinationsSelector(state)
  };
}

export default connect(mapStateToProps)(DashboardPage);
