import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslate } from 'hooks/useTranslate'

export default function EjemploEmbed () {
  const handleFocus = e => {
    e.currentTarget.select()
    try {
      document.execCommand('copy')
    } catch (e) {}
  }

  const translate = useTranslate()

  return (
    <>
      <Head>
        <title>{translate.howtoembed.pageTitle} - covid-vaccine-dk.vercel.app</title>
        <script async defer data-website-id='6e61cfae-3c6b-4ab4-931b-c4848f34fc01' src='https://umami-virid.vercel.app/umami.js' />
      </Head>
      <section id='container'>
        <Link href='/'>
          <a>
            🡐 {translate.howtoembed.backToHome}
          </a>
        </Link>
        <span>
          <Image
            width={64}
            height={64}
            src='/embed.png'
            alt='{translate.howtoembed.altImage}'
          />
        </span>
        <h1>{translate.howtoembed.mainTitle}</h1>
        <p>{translate.howtoembed.subTitle}</p>

        <h2>{translate.howtoembed.copyCode}</h2>
        <textarea
          onChange={() => {}} onFocus={handleFocus} autoComplete='off' autoCapitalize='none' value='&lt;div style=&quot;position: relative; padding-bottom: 56.25%;&quot;&gt; &lt;iframe width=&quot;800&quot; height=&quot;450&quot; src=&quot;https://covid-vaccine-dk.vercel.app/embed&quot; frameborder=&quot;0&quot; scrolling=&quot;no&quot; style=&quot;position: absolute; top: 0; left: 0; width: 100%; height: 100%;&quot; &gt;&lt;/iframe&gt; &lt;/div&gt;'
        />
        <h2>{translate.howtoembed.previsualization}</h2>
        <p>{translate.howtoembed.previsualizationSubtitle}</p>
        <div id='pre-embed' style={{ position: 'relative', paddingBottom: '56.25%' }}>
          <iframe
            width='800'
            height='450'
            src='https://covid-vaccine-dk.vercel.app/embed'
            frameborder='0'
            scrolling='no'
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </div>

      </section>
      <style jsx>{`
        a {
          color: #444;
          margin-bottom: 3rem;
          display: inline-block;
          width: auto;
        }

        a:hover {
          color: #09f;
        }

        p {
          color: #444;
          max-width: 800px;
          margin-top: 4px;
        }

        section {
          display: grid;
          place-content: center;
          min-height: 100vh;
          padding: 3rem 2rem;
          text-align: center;
        }

        textarea {
          background: #fff;
          border: 1px solid #eee;
          cursor: text;
          display: flex;
          flex-direction: column;
          font-family: Menlo, monospace;
          font-size: 1rem;
          height: auto;
          min-height: 125px;
          max-height: 500px;
          overflow-wrap: break-word;
          padding: 8px 16px;
          resize: none;
          text-align: left;
          white-space: pre-wrap;
        }

        iframe {
          border: 1px solid #ccc;
          margin: 0 auto;
        }

        h1 {
          margin-bottom: 4px;
        }

        h2 {
          margin-top: 32px;
          margin-bottom: 4px;
        }
        
      `}
      </style>
    </>
  )
}
