import React, {Component} from 'react'

import Layout from 'components/Layout'

class About extends Component {
  render() {

    return (
      <Layout title="À propos" backRoute="/">
        <div className="px2 pt3">
          <h2>Notre vision</h2>
          <p>L'application <strong>Les Sardines</strong> a été pensé pour :</p>
          <ul>
            <li>Réduire l’impact environnemental lié à la quantité de matériel de camping jeté chaque année sur les
              festivals
            </li>
            <li>Renforcer l’impact social local à destination des plus démunis</li>
            <li>Encourager les liens et la coopération inter-festival autour du développement durable</li>
            <li>Sensibiliser les festivaliers à la consommation responsable et circulaire</li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default About
