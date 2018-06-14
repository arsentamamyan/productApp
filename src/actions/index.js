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