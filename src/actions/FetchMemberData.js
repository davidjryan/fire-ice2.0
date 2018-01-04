export default function FetchHouseData(url) {
  return dispatch => {

    dispatch({ type: "FETCHING_MEMBER_DATA" })

    return fetch('http://localhost:3001/api/v1/character', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url
      })
    })
    .then(res => res.json())
    .then(res => {
      
    })
  };
}