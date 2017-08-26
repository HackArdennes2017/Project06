export function createItem(itemBody, { onSuccess }) {
  return {
    type: 'API:CREATE_ITEM',
    payload: {
      method: 'POST',
      url: '/item',
      multipart: true,
      body: itemBody,
      onSuccess,
      headers: {},
    },
  }
}

export function fetchItems() {
  return {
    type: 'API:GET_ITEMS',
    payload: {
      url: '/item',
    },
  }
}
