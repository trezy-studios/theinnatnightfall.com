/* eslint-env node */

// Module imports
import {
	event as trackEvent,
	GoogleAnalytics,
} from 'nextjs-google-analytics'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core'
import NextHead from 'next/head.js'
import { MDXProvider } from '@mdx-js/react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'





// Local imports
import '../styles/reset.scss'
import '../styles/lib.scss'
import '../styles/app.scss'

import { Banner } from '../components/Banner/Banner.jsx'
import { DefaultSEO } from '../components/DefaultSEO/DefaultSEO.jsx'
import { Footer } from '../components/Footer/Footer.jsx'
import { MDXComponents } from '../components/MDXComponents.jsx'





fontAwesomeConfig.autoAddCss = false

// eslint-disable-next-line jsdoc/require-jsdoc
export default function App(props) {
	const {
		Component,
		pageProps,
	} = props
	const router = useRouter()

	return (
		<MDXProvider components={MDXComponents}>
			<DefaultSEO />

			<GoogleAnalytics
				debugMode={process.env.NODE_ENV !== 'production'}
				trackPageViews />

			<NextHead>
				<meta charSet={'utf-8'} />
				<meta
					content={'width=device-width, initial-scale=1, maximum-scale=1'}
					name={'viewport'} />

				<link
					href={'/apple-touch-icon.png'}
					rel={'apple-touch-icon'}
					sizes={'180x180'} />
				<link
					href={'/favicon-32x32.png'}
					rel={'icon'}
					sizes={'32x32'}
					type={'image/png'} />
				<link
					href={'/favicon-16x16.png'}
					rel={'icon'}
					sizes={'16x16'}
					type={'image/png'} />
				<link
					href={'/site.webmanifest'}
					rel={'manifest'} />
			</NextHead>

			<Banner />

			<Component
				key={router.route}
				{...pageProps} />

			<Footer />

			<VercelAnalytics />
		</MDXProvider>
	)
}

App.defaultProps = {
	pageProps: {},
}

App.propTypes = {
	Component: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.node,
	]).isRequired,
	pageProps: PropTypes.object,
}

export function reportWebVitals({ id, name, label, value }) {
	trackEvent(name, {
		category: (label === 'web-vital') ? 'Web Vitals' : 'Next.js custom metric',
		value: Math.round((name === 'CLS') ? (value * 1000) : value),
		label: id,
		nonInteraction: true,
	})
}
