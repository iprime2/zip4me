import axios from 'axios'

export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    //Authorization: 'bearer' + process.env.REACT_APP_API_TOKEN,
    'Access-Control-Allow-Origin': 'https://sushil-krishil.on.fleek.co',
    'Access-Control-Allow-Headers': 'content-type',
    'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Credentials': true,
  },
  withCredentials: true,
})
