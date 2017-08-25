export function createItem(itemBody, { onSuccess }) {
  return {
    type: 'API:CREATE_ITEM',
    payload: {
      method: 'POST',
      url: '/item',
      body: itemBody,
      onSuccess,
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
