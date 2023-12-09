// Module imports
import { NextSeo as NextSEO } from 'next-seo'
import PropTypes from 'prop-types'





// Local imports
import styles from './PageContent.module.scss'





export function PageContent(props) {
	const {
		children,
		title,
	} = props

	return (
		<>
			<NextSEO title={title} />

			<div className={styles['page-content']}>
				{children}
			</div>
		</>
	)
}

PageContent.defaultProps = {
	children: null,
	title: undefined,
}

PageContent.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string,
}
