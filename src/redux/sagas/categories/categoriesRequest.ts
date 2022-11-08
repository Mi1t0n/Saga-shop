import axios from "axios";

const requestCategories = () => axios.get('/categories')
const requestSubValues =
    (type: string, page?: number, limit?: number) => axios.get(`/${type}?page=${page}&limit=${limit}`)


export {requestSubValues, requestCategories}