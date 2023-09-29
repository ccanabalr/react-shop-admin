import axios from 'axios';
import endPoints from '@services/api';

const addProduct = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.products.postProducts, body, config);
  return response.data;
};

const deleteProduct = async (id) =>{
  const response = await axios.delete(endPoints.products.deleteProducts(id));
  return response.data;
}

const updateProduct = async (id, body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.put(endPoints.products.putProducts(id), body, config);
  return response.data;
};

export { addProduct, deleteProduct, updateProduct };