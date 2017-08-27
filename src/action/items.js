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
    type: 'API:DELETE_ITEM',
    payload: {
      method: 'POST',
      url: `/items/${item._id}/delete`,
      body: item,
    },
  }
}

export function bookItem(item) {
  return {
    type: 'API:BOOK_ITEM',
    payload: {
      method: 'POST',
      url: `/items/${item._id}/book`,
      body: item,
    },
  }
}

export function receiveItem(item) {
  return {
    type: 'API:RECEIVE_ITEM',
    payload: {
      method: 'POST',
      url: `/items/${item._id}/receive`,
      body: item,
    },
  }
}
