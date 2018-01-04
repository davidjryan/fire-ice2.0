import * as actions from '../index';

describe('fetch house actions', () => {
  it('FetchHouseData return house data', async () => {
    const houses = [{ name: 'snow' }, { name: 'Lannister' }, { name: 'Dorne' }];
    const expected = {
      type: 'FETCHING_HOUSE_DATA_SUCCESS',
      houses
    };

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(
        {
          data: [
            { name: 'snow' }, { name: 'Lannister' }, { name: 'Dorne' }
          ],
          message: "Retrieved Houses",
          status: "success"
        }
      )
    }));

    const houseSetRes = await actions.FetchHouseData();
    expect(houseSetRes).toEqual(expected);
  })
}