import apiStoreService from '../api/apiServices';

export const productInitialState = '';

export const productReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT':
      return action.data;
    case 'SET_DESCRIPTION':
      return {...state,description: action.data}
    case 'SET_BUSINESSMODELS':
      return {...state,businessModels: action.data}  
    case 'SET_CATEGORIES':
      return {...state,categories: action.data} 
    case 'SET_TRL':
      return {...state,trl: action.data}     
    default:
      return state;
  }
};

export const getProduct = () => async (dispatch) => {
  const response = await apiStoreService.apiGetProduct();
  console.log('reducer', response);
  dispatch({ type: 'GET_PRODUCT', data: response.data });
};

export const setDescription = (data) => {
   console.log('setdescription',data)
   return {type: 'SET_DESCRIPTION',data}
}

export const setAttribute = (attribute,data) => {
  console.log(['SET_',attribute.toUpperCase()].join(''), data)
  return {type: ['SET_',attribute.toUpperCase()].join('') ,data}
}

// export const setCategories = (data) => {
//   return {type: 'SET_CATEGORIES',data}
// }

// export const setBusinessModels = (data) => {
//   return {type: 'SET_BUSINESSMODELS',data}
// }

// export const setTrl = (data) => {
//   return {type: 'SET_TRL',data}
// }