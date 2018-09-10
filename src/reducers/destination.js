import { createSelector } from "reselect";

export default function destinations(state = {}, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

// SELECTORS:

export const destinationsSelector = state => state.destinations;

export const allDestinationsSelector = createSelector(
  destinationsSelector,
  destinationsHash => Object.values(destinationsHash)
);
