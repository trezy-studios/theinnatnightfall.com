// Module imports
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useMemo } from 'react'





// Local imports
import styles from './PageSection.module.scss'





export function PageSection(props) {
	const {
		children,
		className,
	} = props

	const compiledClassName = useMemo(() => {
		return classnames(styles['page-section'], className)
	}, [className])

	return (
		<section className={compiledClassName}>
			{children}
		</section>
	)
}

PageSection.defaultProps = {
	children: null,
	className: '',
}

PageSection.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
}
