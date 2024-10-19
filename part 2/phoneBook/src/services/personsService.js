import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request
        .then((response) => response.data)
        .catch((error) => {
            console.error('Error fetching data:', error)
        })
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request
        .then((response) => response.data)
        .catch((error) => {
            console.error('Error adding data to server:', error)
        })
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

export default {
    getAll,
    create,
    update,
}
