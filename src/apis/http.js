import axios from 'axios'

export const get = (resource, params) => axios.get(resource, params)

export const post = (resource, params) => axios.post(resource, params)

export const put = (resource, params) => axios.put(resource, params)

export const del = (resource, params) => axios.delete(resource, params)
