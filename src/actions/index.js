import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3';

export function getLaunches(type) {
  let output;

  if (type === 'all') {
    output = axios.get(`${baseUrl}/launches`)
      .then((res) => res.data);
  } else {
    output = axios.get(`${baseUrl}/launches/${type}`)
      .then((res) => res.data);
  }

  return {
    type: 'GET_LAUNCHES',
    payload: output
  }
}

export function getLaunch(flight_number) {

  const output = axios.get(`${baseUrl}/launches/${flight_number}`)
    .then((res) => res.data);

  return {
    type: 'GET_LAUNCH',
    payload: output
  }
}