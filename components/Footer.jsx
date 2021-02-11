import { useTranslate } from 'hooks/useTranslate'
import styles from 'styles/Footer.module.css'

export default function Footer () {
  const translate = useTranslate()
  return (
    <footer className={styles.footer}>
      <div>
        <a
          href='https://piribisoft.com'
          target='_blank'
          rel='noreferrer'
        >
          {translate.footer.adaptedBy}{' '}SirMartin
        </a>
        <a
          href='https://midu.dev'
          target='_blank'
          rel='noreferrer'
        >
          {translate.footer.developedBy}{' '}
          <img width='92' height='24' loading='lazy' src='https://midu.dev/logo.png' alt='midudev' />
        </a>
        <span>&bull;</span>
        <a href='https://github.com/sirmartin/covid-vacuna' rel='nofollow noreferrer' target='_blank'>GitHub</a>
        <span>&bull;</span>
        <a href='https://app.usefathom.com/share/myexkunw/covid-vacuna.vercel.app' rel='nofollow noreferrer' target='_blank'>{translate.footer.statistics}</a>
        <span>&bull;</span>
        <a href='https://github.com/midudev/covid-vacuna/issues/new' rel='nofollow noreferrer' target='_blank'>{translate.footer.suggestions}</a>
      </div>
    </footer>
  )
}
