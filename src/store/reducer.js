import apiStoreService from '../api/apiServices';

export const productInitialState = '';

export const productReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT':
      return action.data;
    default:
      return state;
  }
};

export const getProduct = () => async (dispatch) => {
  const response = await apiStoreService.apiGetProduct();
  console.log('reducer', response);
  dispatch({ type: 'GET_PRODUCT', data: response.data });
};
