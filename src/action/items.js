export function createItem(itemBody) {
  return {
    type: 'API:CREATE_ITEM',
    payload: {
      method: 'POST',
      url: '/item',
      body: itemBody,
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
