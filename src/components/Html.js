import React from 'react'
import serialize from 'serialize-javascript'

const Html = ({ content, state, stats: { styles, main = 'bundle.js' } }) =>
  <html lang="fr">
    <head>
      <title>Sardines</title>

      <meta charSet="utf-8" />
      <meta name="theme-color" content="#65214b" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      {styles && <link href={`/dist/${styles}`} rel="stylesheet" />}

      <script
        dangerouslySetInnerHTML={{
          __html: `window.__INITIAL_STATE__ = ${serialize(state)}`,
        }}
      />
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
      <script src={`/dist/${main}`} />
    </body>
  </html>

export default Html
