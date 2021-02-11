// global SEO config
const title = 'Overvågningen af covid-19-vaccinationstilslutning i Danmark'
const description =
  'Consulta el estado y progreso de la vacunación del COVID-19 de forma diaria según datos del gobierno.'

const SEO = {
  title,
  description,
  canonical: 'https://covid-vaccine-dk.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: 'https://covid-vaccine-dk.vercel.app',
    title,
    description,
    images: [
      {
        url: 'https://covid-vaccine-dk.vercel.app/og.png',
        alt: title,
        width: 1200,
        height: 627
      }
    ]
  },
  twitter: {
    handle: '@midudev',
    site: '@midudev',
    cardType: 'summary_large_image'
  }
}

export default SEO
