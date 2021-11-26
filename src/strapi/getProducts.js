import url from "./URL";
import axios from "axios";
export default async() => {
    const response = await axios.get(`${url}/products`).catch(error => 
        console.error(error));
    let products = response.data;
    if (products.error){
        return null;
    }
    return products;
}