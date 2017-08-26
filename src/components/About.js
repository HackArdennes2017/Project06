import React, { Component } from 'react'

import Layout from 'components/Layout'

class About extends Component {
  render() {
    return (
      <Layout title="À propos" backRoute="/">
        <div className="px2 pt1">
          <h2>Notre vision</h2>
          <p>
            L&apos;application <strong>Les Sardines</strong> a été pensée pour :
          </p>
          <ul>
            <li>
              Réduire l’impact environnemental lié à la quantité de matériel de
              camping jeté chaque année sur les festivals
            </li>
            <li>
              Renforcer l’impact social local à destination des plus démunis
            </li>
            <li>
              Encourager les liens et la coopération inter-festival autour du
              développement durable
            </li>
            <li>
              Sensibiliser les festivaliers à la consommation responsable et
              circulaire
            </li>
          </ul>
          <img
            alt="photo1"
            src="/assets/photos/1.jpg"
            height="auto"
            width="80%"
            style={{ margin: '20px auto' }}
          />
          <h2>Cet outil s’adresse :</h2>
          <ul>
            <li>
              Aux festivaliers pour
              <ul>
                <li>
                  Réserver en avance du matériel de camping d’occasion mis à
                  disposition directement sur le site du festival
                </li>
                <li>
                  Faire don du matériel de camping qu’il ne souhaite/peut pas
                  ramener chez lui
                </li>
              </ul>
            </li>
            <li>
              Aux Organisateurs de festival pour
              <ul>
                <li>
                  Réduire la quantité de déchets sur les sites de camping du
                  festival
                </li>
                <li>
                  Offrir une nouvelle solution non consumériste aux festivaliers
                  non équipés de matériel de camping et renforcer l’engagement
                  des festivaliers
                </li>
              </ul>
            </li>
            <li>
              Aux associations d’entraide en leur donnant accès à un stock
              inventorié leur permettant de rester en adéquation avec les
              besoins de leurs communautés
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default About
