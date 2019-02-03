import {API_ROOT} from '../../utils/default';

export const postData = (url, data) => {
  // from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  return fetch(url, {
    body: JSON.stringify(data),
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    referrer: 'no-referrer',
  }).then(response => response.json()); // parses response to JSON
};

export const httpGet = async endPoint => {
  try {
    const response = await fetch(`${API_ROOT}/${endPoint}`)
    if (response.ok) {
      const json = await response.json()
      return json
    } else {
      throw new Error(response.status)
    }
  } catch (err) {
    console.warn('httpGet error ', err)
  }
}
