// TODO:: replace with actual base url
const BASE_URL = 'https://api.xyz/v1';
let commonHeaders = {
    'Content-Type': 'application/json',
    // Add other properties if required

}


/**
 * A function to make 'get' API request
 */

export function callGetApi(endpoint) {
    const url = `${BASE_URL}/${endpoint}`
  
    return fetch(url, {
        method: 'GET',
        headers: {
            ...commonHeaders,
      }
    })
    .then(res => {
      console.log(res)
      return res.json()
    })
  }


/**
 * A function to make 'post' API request
 */

export function callPostApi(endpoint, payload) {
    const url = `${BASE_URL}/${endpoint}`
  
    return fetch(url, {
        method: 'POST',
        headers: {
            ...commonHeaders,
      },
      body: JSON.stringify(payload)
    })
    .then(res => {
      console.log(res)
      return res.json()
    })
  }


/**
 * A function to make 'post' API request
 */

export function callPutApi(endpoint, id, payload) {
    const url = `${BASE_URL}/${endpoint}/${id}`
  
    return fetch(url, {
        method: 'PUT',
        headers: {
            ...commonHeaders,
      },
      body: JSON.stringify(payload)
    })
    .then(res => {
      console.log(res)
      return res.json()
    })
  }


/**
 * A function to make 'post' API request
 */

export function callDeleteApi(endpoint, id) {
    const url = `${BASE_URL}/${endpoint}/${id}`
  
    return fetch(url, {
        method: 'DELETE',
        headers: {
            ...commonHeaders,
      }
    })
    .then(res => {
      console.log(res)
      return res.json()
    })
  }