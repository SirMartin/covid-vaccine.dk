// global SEO config
const title = 'Overvågningen af covid-19-vaccinationstilslutning i Danmark'
const description =
  'Check status og fremskridt for COVID-19-vaccination dagligt i henhold til Statens Serum Instituts data.'

const SEO = {
  title,
  description,
  canonical: 'https://covid-vaccine.dk',
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: 'https://covid-vaccine.dk',
    title,
    description,
    images: [
      {
        url: 'https://covid-vaccine.dk/og.png',
        alt: title,
        width: 1200,
        height: 627
      }
    ]
  },
  twitter: {
    handle: '@sirMartinPiribi',
    site: '@sirMartinPiribi',
    cardType: 'summary_large_image'
  }
}

export default SEO
