import axios from "axios";

const postOrder = (products: any) => axios.post('/orders', products)


export {postOrder}