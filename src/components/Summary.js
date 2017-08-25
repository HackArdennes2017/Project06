import React, { Component } from 'react'
import QRCode from 'qrcode.react'

import Layout from 'components/Layout'

class Summary extends Component {
  render() {
    return (
      <Layout
        title="Enregistré"
        withoutBack
        className="px3 justify-center items-center"
      >
        <QRCode value="SALUTASLUT" />
        <p className="mt3" style={{ textAlign: 'center' }}>
          Vous pouvez vous diriger vers le point de collecte Sardines pour
          déposer votre matériel. Il se situe à la sortie du camping, sur la
          droite.
        </p>
      </Layout>
    )
  }
}

export default Summary
