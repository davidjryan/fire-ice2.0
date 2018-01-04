export default function FetchHouseData() {
  return dispatch => {

    dispatch({ type: "FETCHING_HOUSE_DATA" })

    return fetch('http://localhost:3001/api/v1/houses')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        return dispatch({ type: "FETCHING_HOUSE_DATA_SUCCESS", payload: res })
      })
      .catch(err => {
        return dispatch({ type: "FETCHING_HOUSE_DATA_FAIL", payload: err });
      });
  };
}