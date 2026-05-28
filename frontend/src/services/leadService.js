import axios from "axios"

const API_URL = "http://127.0.0.1:5000"


export const addLead = async (leadData) => {

  const response = await axios.post(
    `${API_URL}/leads`,
    leadData
  )

  return response.data
}


export const getLeads = async () => {

  const response = await axios.get(
    `${API_URL}/leads`
  )

  return response.data
}


export const updateLead = async (id, leadData) => {

  const response = await axios.put(
    `${API_URL}/leads/${id}`,
    leadData
  )

  return response.data
}


export const deleteLead = async (id) => {

  const response = await axios.delete(
    `${API_URL}/leads/${id}`
  )

  return response.data
}


export const getStats = async () => {

  const response = await axios.get(
    `${API_URL}/stats`
  )

  return response.data
}