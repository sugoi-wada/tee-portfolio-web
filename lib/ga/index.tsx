import Script from 'next/script'

export const GoogleAnalytics = () => {
  if (process.env.NODE_ENV !== 'production') {
    return <></>
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env['NEXT_PUBLIC_GOOGLE_ANALYTICS']}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${process.env['NEXT_PUBLIC_GOOGLE_ANALYTICS']}');
    `}
      </Script>
    </>
  )
}
