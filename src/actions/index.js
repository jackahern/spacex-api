import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3';

export function getUpcomingLaunches() {

  const output = axios.get(`${baseUrl}/launches/upcoming`)
    .then((res) => res.data);

  return {
    type: 'GET_UPCOMING_LAUNCHES',
    payload: output
  }
}

export function getPastLaunches() {

  const output = axios.get(`${baseUrl}/launches/past`)
    .then((res) => res.data);

  return {
    type: 'GET_PAST_LAUNCHES',
    payload: output
  }
}

export function getLatestLaunch() {

  const output = axios.get(`${baseUrl}/launches/latest`)
    .then((res) => res.data);

  return {
    type: 'GET_LATEST_LAUNCH',
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

export function getRockets() {

  const output = axios.get(`${baseUrl}/rockets`)
    .then((res) => res.data);

  return {
    type: 'GET_ROCKETS',
    payload: output
  }
}

export function getRoadster() {

  const output = axios.get(`${baseUrl}/roadster`)
    .then((res) => res.data);

  return {
    type: 'GET_ROADSTER',
    payload: output
  }
}