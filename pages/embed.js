import styles from 'styles/Embed.module.css'

import NumberDigits from 'components/NumberDigits'
import NumberPercentage from 'components/NumberPercentage.jsx'
import TimeAgo from 'components/TimeAgo'
import { useTranslate } from 'hooks/useTranslate'

export default function Embed ({ data, info, totalPopulation }) {
  const totals = data.find(({ region }) => region === 'Total')
  const translate = useTranslate()

  return (
    <>
      <div className={styles.embedContainer}>

        <div className={styles.card}>
          <img
            className={styles.cardImage}
            src='/embed-map.png'
            alt='{translate.embed.deliveredDosesAlt}'
            width={370}
            height={150}
          />
          <section>
            <div>
              <h3>{translate.embed.deliveredDoses}</h3>
              <p>
                <NumberDigits>{totals.deliveredDoses}</NumberDigits>
              </p>
            </div>
            <p><strong><NumberPercentage>{totals.deliveredDoses / totalPopulation}</NumberPercentage></strong> {translate.embed.deliveredDosesContent}</p>
          </section>
        </div>

        <div className={styles.card}>
          <img
            src='/vacuna.png'
            alt='{translate.Embed.appliedDosesAlt}'
            width={150}
            height={150}
          />
          <section>
            <div>
              <h3>{translate.embed.appliedDoses}</h3>
              <p>
                <NumberDigits>{totals.appliedDoses}</NumberDigits>
              </p>
            </div>
            <p>
              <strong><NumberPercentage>{totals.appliedDoses / totalPopulation}</NumberPercentage></strong> {translate.embed.appliedDosesContent1}
              <br /><strong><NumberPercentage>{totals.percentageOverDelivered}</NumberPercentage></strong> {translate.embed.appliedDosesContent2}
            </p>
          </section>
        </div>

        <div className={styles.card}>
          <img
            src='/vacunas-completas.png'
            alt='{translate.embed.bothDosesContentAlt}'
            width={150}
            height={150}
          />
          <section>
            <div>
              <h3>{translate.embed.bothDoses}</h3>
              <p>
                <NumberDigits>{totals.bothDosesApplied}</NumberDigits>
              </p>
            </div>
            <p>
              {translate.embed.bothDosesContent1}<br />
              <strong><NumberPercentage>{totals.bothDosesApplied / totals.appliedDoses}</NumberPercentage></strong> {translate.embed.bothDosesContent2}<br />
              <strong><NumberPercentage>{totals.bothDosesApplied / totalPopulation}</NumberPercentage></strong> {translate.embed.bothDosesContent3}
            </p>
          </section>
        </div>

        <small className={styles.description}>
          <a href='https://covid-vaccine-dk.vercel.app'><strong>covid-vaccine-dk.vercel.app</strong></a> - {translate.embed.updatedDate} <TimeAgo timestamp={info.lastModified} />.
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
