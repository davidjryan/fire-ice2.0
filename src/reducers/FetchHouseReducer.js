const initialState = {
  isLoading: false,
  houseData: [],
  hasErrored: false,
  errorMessage: null,
};

const FetchHouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_HOUSE_DATA":
      return {
        ...state,
        isLoading: true,
        houseData: null,
        hasErrored: false,
        errorMessage: null,
      };
    case "FETCHING_HOUSE_DATA_SUCCESS":
      return {
        ...state,
        isLoading: false,
        houseData: action.payload,
        hasErrored: false,
        errorMessage: null,
      };
    case "FETCHING_HOUSE_DATA_FAIL":
      return {
        ...state,
        isLoading: false,
        houseData: [],
        hasErrored: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default FetchHouseReducer;