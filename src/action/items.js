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

export function deleteItem(item) {
  return {
    type: 'API:DELETE_ITEMS',
    payload: {
      method: 'DELETE',
      url: `/item/${item._id}`,
    },
  }
}

export function bookItem(item) {
  return {
    type: 'API:BOOK_ITEM',
    payload: {
      method: 'POST',
      url: `/item/${item._id}`,
    },
  }
}
