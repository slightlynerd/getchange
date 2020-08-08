import { post, get, put, del } from './http'

import { EMPLOYEES } from '../utils/routes'

export const addEmployee = payload => post(EMPLOYEES, payload)

export const getEmployees = () => get(EMPLOYEES)

export const updateEmployeeRole = (payload, id) => put(`${EMPLOYEES}/${id}`, payload)

export const deleteEmployee = id => del(`${EMPLOYEES}/${id}`)
