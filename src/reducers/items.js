import { handleActions } from 'redux-actions'

const initialState = []

export default handleActions(
  {
    GET_ITEMS_SUCCESS: (state, { payload }) => payload.data,
    CREATE_ITEM_SUCCESS: (state, { payload: { data: item } }) => [
      ...state,
      item,
    ],
  },
  initialState,
)
