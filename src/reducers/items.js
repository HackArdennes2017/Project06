import { handleActions } from 'redux-actions'

const initialState = []

const updateItemById = (state, { payload: { data: item } }) => {
  const i = state.findIndex(i => i._id === item._id)
  if (i === -1) {
    return state
  }
  const newState = [...state]
  newState.splice(i, 1, item)
  return newState
}

export default handleActions(
  {
    GET_ITEMS_SUCCESS: (state, { payload }) => payload.data,
    CREATE_ITEM_SUCCESS: (state, { payload: { data: item } }) => [
      ...state,
      item,
    ],
    RECEIVE_ITEM_SUCCESS: updateItemById,
    DELETE_ITEM_SUCCESS: updateItemById,
    BOOK_ITEM_SUCCESS: updateItemById,
  },
  initialState,
)
