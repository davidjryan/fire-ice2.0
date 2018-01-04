import FetchHouseReducer from '../FetchHouseReducer';

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
});