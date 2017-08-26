const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://team06.hackardennes.com/api'
    : 'http://localhost:3001'

export default store => next => async action => {
  if (!action.type.startsWith('API:')) {
    return next(action)
  }

  const { dispatch } = store
  const prefix = action.type.split(':')[1]

  const { method = 'GET', onSuccess, multipart } = action.payload

  let { url = '', body, headers } = action.payload

  url = `${API_URL}${url}`

  headers = headers || {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  if (body) {
    if (multipart) {
      const formData = new FormData()
      for (const name in body) {
        if (body.hasOwnProperty(name)) {
          formData.append(name, body[name])
        }
      }
      body = formData
    } else {
      body = JSON.stringify(body)
    }
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

  if (onSuccess) {
    onSuccess(resJSON)
  }
}
