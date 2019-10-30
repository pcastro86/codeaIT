import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import routes from "../src/utils/routes.json";
import epaCor from "../src/utils/epa-cor.json";
import epaMdz from "../src/utils/epa-mdz.json";


const INITAIL_STATE = {
  routes: routes.routes,
  destinations: [],
  selectedOrigin: false,
  finish: false,
  epaCor: epaCor.flights,
  epaMdz: epaMdz.flights,
};

// REDUCERS

function productsReducer(state = INITAIL_STATE, action) {
  switch (action.type) {
    case "FETCH_ROUTES_REQUEST": {
      return {
        ...state,
      };
    }
    case "FETCH_DESTINATION_REQUEST": {
      const { destinations } = action.payload;
      const arrive = state.routes.filter(el => el.metroGroup === destinations)
      .map(element => element.destinations)
      return {
        ...state,
        destinations: arrive
      };
    }
    case "SELECTED_ORIGIN": {
      return {
        ...state,
        selectedOrigin: true
      };
    }
    case "IS_FINISH": {
      return {
        ...state,
        finish: true
      };
    }
    case "DESELECTED_ORIGIN": {
      return {
        ...state,
        selectedOrigin: false
      };
    }
    case "UPDATE_ORIGIN": {
      return {
        ...state,
        finish: false
      };
    }
    default: {
      return state;
    }
  }
}

// ACTIONS

const fetchRoutesRequestAction = () => {
  return { type: "FETCH_ROUTES_REQUEST" };
};

const fetchDestinationRequestAction = destinations => {
  return { type: "FETCH_DESTINATION_REQUEST", payload: {destinations} };
};

const selectedOriginAction = () => {
  return { type: "SELECTED_ORIGIN" };
};

const isFinishAction = () => {
  return { type: "IS_FINISH" };
};

const updateOriginAction = () => {
  return { type: "UPDATE_ORIGIN" };
};

const deselectedOriginAction = () => {
  return { type: "DESELECTED_ORIGIN" };
};


// FUNCTIONS

const getRoutesRequest = destinations => {
  return function(dispatch) {
      dispatch(fetchRoutesRequestAction(destinations));
  };
};


const getDestinationRequest = value => {
  return function(dispatch) {
      dispatch(fetchDestinationRequestAction(value));
      dispatch(selectedOriginAction())
  };
};

const isFinish = () => {
  return function(dispatch) {
      dispatch(isFinishAction())
  };
};

const deselectedOrigin = () => {
  return function(dispatch) {
      dispatch(deselectedOriginAction())
  };
};

const updateOrigin = () => {
  return function(dispatch) {
      dispatch(updateOriginAction())
  };
};



const store = createStore(
  productsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export {
  store as default,
  getRoutesRequest,
  getDestinationRequest,
  isFinish,
  deselectedOrigin,
  updateOrigin
};
