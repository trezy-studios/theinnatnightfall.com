// Module import
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useMemo } from 'react'





// Local imports
import styles from './Heading.module.scss'





export function Heading(props) {
	const {
		children,
		className,
		level,
	} = props

	const compiledClassName = useMemo(() => {
		return classnames(styles['heading'], styles[`level-${level}`], className)
	}, [
		className,
		level,
	])

	if (level === 1) {
		return (
			<h1 className={compiledClassName}>
				{children}
			</h1>
		)
	}

	if (level === 2) {
		return (
			<h2 className={compiledClassName}>
				{children}
			</h2>
		)
	}

	if (level === 3) {
		return (
			<h3 className={compiledClassName}>
				{children}
			</h3>
		)
	}

	if (level === 4) {
		return (
			<h4 className={compiledClassName}>
				{children}
			</h4>
		)
	}

	if (level === 5) {
		return (
			<h5 className={compiledClassName}>
				{children}
			</h5>
		)
	}

	return (
		<h6 className={compiledClassName}>
			{children}
		</h6>
	)
}

Heading.defaultProps = {
	children: null,
	className: '',
	level: 1,
}

Heading.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	level: PropTypes.number,
}
