import sendRequest from "./send-request";

const BASE_URL = '/api/orders';

export function getCart() {
    return sendRequest(`${BASE_URL}/cart`);
}

export function addItemToCart(itemId) {
    return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}

export function setItemQtyInCart(itemId, newQty) {
    return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
}

export function checkout() {
    return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function getOrders() {
    return sendRequest(`${BASE_URL}/user/orders`, 'GET');
  }