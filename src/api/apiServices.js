import axios from 'axios';

const apiUrl = 'https://api-test.innoloft.com/';
const productEndpoint = 'product/6781/';
const configEndpoint = 'configuration/';

const apiGetProduct = async () => {
  try {
    const response = await axios.get(`${apiUrl}${productEndpoint}`);
    return response;
  } catch (error) {
    return error;
  }
};

const apiGetConfiguration = async (id) => {
    try {
      const response = await axios.get(`${apiUrl}${configEndpoint}${id}`);
      return response;
    } catch (error) {
      return error;
    }
  };

  
const apiStoreService = {
    apiGetProduct,apiGetConfiguration
};
export default apiStoreService;
