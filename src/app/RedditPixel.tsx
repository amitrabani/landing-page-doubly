import Script from 'next/script';

const REDDIT_PIXEL_ID = process.env.NEXT_PUBLIC_REDDIT_PIXEL_ID?.trim();

// Reddit conversion pixel. Inert until NEXT_PUBLIC_REDDIT_PIXEL_ID is set, so it
// is safe to ship before the pixel exists. Fires the base PageVisit event on
// load; downstream conversions (SignUp, Lead, Purchase) are sent via rdt() calls
// from the relevant components, e.g. window.rdt?.('track', 'SignUp').
export function RedditPixel() {
  if (!REDDIT_PIXEL_ID) return null;
  return (
    <Script id="reddit-pixel" strategy="afterInteractive">
      {`!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','${REDDIT_PIXEL_ID}');rdt('track','PageVisit');`}
    </Script>
  );
}
