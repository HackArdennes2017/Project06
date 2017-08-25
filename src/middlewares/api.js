const API_URL = 'http://localhost:3001'

export default store => next => async action => {
  if (!action.type.startsWith('API:')) {
    return next(action)
  }

  const { dispatch } = store
  const prefix = action.type.split(':')[1]

  const { method = 'GET' } = action.payload

  let { url = '', body } = action.payload

  url = `${API_URL}${url}`

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  if (body) {
    body = JSON.stringify(body)
  }

  const res = await fetch(url, { method, headers, body })
  const resJSON = await res.json()

  if (resJSON.code >= 400) {
    dispatch({
      type: `${prefix}_ERROR`,
    })
    alert(resJSON.message) // eslint-disable-line
    throw new Error(resJSON.message)
  }
  dispatch({
    type: `${prefix}_SUCCESS`,
    payload: {
      data: resJSON,
    },
  })
}
