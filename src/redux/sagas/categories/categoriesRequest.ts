import axios from "axios";

const requestCategories = () => axios.get('/categories').then(({data}) => data)
const requestSubValues =
    (type: string, page?: number, limit?: number) =>
        axios.get(`/${type}?page=${page}&limit=${limit}`
        ).then(({data}) => data)


export {requestSubValues, requestCategories}