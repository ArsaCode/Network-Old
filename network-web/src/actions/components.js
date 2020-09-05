import axios from 'axios';

import { GET_POSTS } from './types';

export function lookupServer(callback, action, path) {
  const xhr = new XMLHttpRequest()
  const method = action
  const url = `http://127.0.0.1:8000/${path}`

  xhr.responseType = 'json'
  xhr.open(method, url)
  xhr.onload = () => {
    callback(xhr.response, xhr.status)
  }
  xhr.onerror = (e) => {
    console.log(e)
    callback(xhr.response, xhr.status)
  }
  xhr.send()
}

export function formtoServer(callback, action, path, e) {
  e.preventDefault()
  const myForm = e.target
  const myFormData = new FormData(myForm)
  const xhr = new XMLHttpRequest()
  const method = action
  const url = `http://127.0.0.1:8000/${path}`
  xhr.responseType = 'json'
  xhr.open(method, url)
  xhr.onload = () => {
    callback(xhr.response, xhr.status)
    myForm.reset()
  }
  xhr.onerror = (evt) => {
    console.log(evt)
    callback(xhr.response, xhr.status)
  }
  xhr.send(myFormData)
}

export const getPosts = () => dispatch => {
  axios.get('http://127.0.0.1:8000/restapi/posts')
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    }).catch(err => console.log(err));
}