import _ from 'lodash';
import DateFormat from 'dateformat';
const URL = `http://localhost:3005`;

export function allProducts() {
  const request = fetch(`${URL}/products`, {
    method: 'GET'
  }).then(response => response.json())

  return {
    type: 'GET_PRODUCTS',
    payload: request
  }
}

export function selectedProduct(id) {
  const request = fetch(`${URL}/products?id=${id}`, {
    method: 'GET'
  }).then(response => response.json())

  return {
    type: 'GET_PRODUCT_DETAILS',
    payload: request
  }
}

export function clearSelectedProduct() {
  return {
    type: 'CLEAR_SELECTED_PRODUCT',
    payload: []
  }
}

export function deleteProduct(id) {
  const request = fetch(`${URL}/products/${id}`, {
    method: 'DELETE'
  }).then(response => response.json())

  return {
    type: 'DELETE_PRODUCT',
    payload: request
  }
}

export function addProduct(values, id, callback) {
  let createdAtFormat = 'dd/mm/yyyy';
  const request = fetch(`${URL}/products`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(_.assign({}, values, {
      created_at: DateFormat(new Date(), createdAtFormat),
      image: "images/noimage.jpg",
    }))
  }).then(
    () => callback()
  );

  return {
    type: 'ADD_PRODUCT',
    payload: 'success'
  }
}

export function updateProduct(values, id, callback) {
  values.id = id;
  const request = fetch(`${URL}/products/${id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values)
  }).then(
    () => callback()
  )

  return {
    type: 'UPDATE_PRODUCT',
    payload: 'success'
  }
}