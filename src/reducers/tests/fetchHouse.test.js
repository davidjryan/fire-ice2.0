import FetchHouseReducer from '../FetchHouseReducer';
import FetchHouseData from '../../actions/FetchHouseData';

describe('movies reducer', () => {
  const mockHouseData = { houses: [{ name: "Lannister" }] };

  it('should have a default state', () => {
    expect(FetchHouseReducer(undefined, {})).toEqual({
      isLoading: false,
      houseData: [],
      hasErrored: false,
      errorMessage: null,
    });
  });

  it('should have an array of house data if type FETCHING_HOUSE_DATA_SUCCESS', () => {
    const action = { type: 'FETCHING_HOUSE_DATA_SUCCESS', mockHouseData };

    expect(FetchHouseReducer({}, action).length).toEqual(mockHouseData.length);
  });


  it('should return true if FETCHING_HOUSE_DATA', () => {
    const action = { type: 'FETCHING_HOUSE_DATA' };

    expect(FetchHouseReducer({}, action)).toEqual({
      isLoading: true,
      houseData: null,
      hasErrored: false,
      errorMessage: null,
    });
  });

  it('should return true if FETCHING_HOUSE_DATA_FAIL', () => {
    const action = { type: 'FETCHING_HOUSE_DATA_FAIL', payload: "Type 404" };

    expect(FetchHouseReducer({}, action)).toEqual({
      isLoading: false,
      houseData: [],
      hasErrored: true,
      errorMessage: action.payload,
    });
  });
});