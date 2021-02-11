import styles from 'styles/Embed.module.css'

import NumberDigits from 'components/NumberDigits'
import NumberPercentage from 'components/NumberPercentage.jsx'
import TimeAgo from 'components/TimeAgo'

export default function Embed ({ data, info, totalPopulation }) {
  const totals = data.find(({ region }) => region === 'Total')

  return (
    <>
      <div className={styles.embedContainer}>

        <div className={styles.card}>
          <img
            className={styles.cardImage}
            src='/mapa.png'
            alt='Vacunas distribuidas en España'
            width={150}
            height={150}
          />
          <section>
            <div>
              <h3>Dosis distribuidas:</h3>
              <p>
                <NumberDigits>{totals.deliveredDoses}</NumberDigits>
              </p>
            </div>
            <p>Es el <strong><NumberPercentage>{totals.deliveredDoses / totalPopulation}</NumberPercentage></strong> del total de España</p>
          </section>
        </div>

        <div className={styles.card}>
          <img
            src='/vacuna.png'
            alt='Vacunas administradas en España'
            width={150}
            height={150}
          />
          <section>
            <div>
              <h3>Dosis administradas:</h3>
              <p>
                <NumberDigits>{totals.appliedDoses}</NumberDigits>
              </p>
            </div>
            <p>
              Supone el <strong><NumberPercentage>{totals.appliedDoses / totalPopulation}</NumberPercentage></strong> del total de España<br />Es el <strong><NumberPercentage>{totals.percentageOverDelivered}</NumberPercentage></strong> sobre las vacunas distribuidas
            </p>
          </section>
        </div>

        <div className={styles.card}>
          <img
            src='/vacunas-completas.png'
            alt='Dosis completas subministradas'
            width={150}
            height={150}
          />
          <section>
            <div>
              <h3>Pauta completa:</h3>
              <p>
                <NumberDigits>{totals.bothDosesApplied}</NumberDigits>
              </p>
            </div>
            <p>
              Personas que han recibido las dos dosis de la vacuna.<br />
              Suponen un <strong><NumberPercentage>{totals.bothDosesApplied / totals.appliedDoses}</NumberPercentage></strong> de las dosis administradas.<br />Supone el <strong><NumberPercentage>{totals.bothDosesApplied / totalPopulation}</NumberPercentage></strong> del total de España
            </p>
          </section>
        </div>

        <small className={styles.description}>
          <a href='https://covid-vacuna.app'><strong>covid-vacuna.app</strong></a> - Datos actualizados <TimeAgo timestamp={info.lastModified} />.
        </small>

      </div>
    </>
  )
}

export async function getStaticProps () {
  const data = require('../public/data/latest.json')
  const info = require('../public/data/info.json')
  const { population: { Total } } = require('../public/data/bbdd.json')

  return {
    props: {
      data,
      info,
      totalPopulation: Total
    }
  }
}
