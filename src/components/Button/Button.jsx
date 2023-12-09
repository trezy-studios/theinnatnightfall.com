// Style imports
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useMemo } from 'react'






// Module imports
import styles from './Button.module.scss'





// Constants
const VARIANTS = {
	hidden: {
		opacity: 0,
		x: 20,
	},
	visible: {
		opacity: 1,
		x: 0,
	},
}





/**
 * Renders a button.
 *
 * @component
 */
export function Button(props) {
	const {
		children,
		className,
		isAuxiliary,
		isDisabled,
		isLink,
		isLoading,
		isPrimary,
		isSubmit,
		onClick,
		onMouseOut,
		onMouseOver,
	} = props

	const compiledClassName = useMemo(() => {
		return classnames(styles['button'], className, {
			[styles['is-auxiliary']]: isAuxiliary,
			[styles['is-disabled']]: isDisabled,
			[styles['is-link']]: isLink,
			[styles['is-loading']]: isLoading,
			[styles['is-primary']]: isPrimary,
		})
	}, [
		className,
		isAuxiliary,
		isDisabled,
		isLink,
		isLoading,
		isPrimary,
	])

	return (
		// eslint-disable-next-line react/forbid-elements
		<button
			className={compiledClassName}
			disabled={isDisabled}
			onClick={onClick}
			onMouseOver={onMouseOver}
			onMouseOut={onMouseOut}
			type={isSubmit ? 'submit' : 'button'}>
			<motion.span
				animate={isLoading ? 'hidden' : 'visible'}
				className={styles['children']}
				initial={'visible'}
				variants={VARIANTS}>
				{children}
			</motion.span>

			<motion.span
				animate={isLoading ? 'visible' : 'hidden'}
				className={styles['loader']}
				initial={'hidden'}
				variants={VARIANTS}>
				<FontAwesomeIcon
					fixedWidth
					icon={faSpinner}
					spinPulse />
			</motion.span>
		</button>
	)
}

Button.defaultProps = {
	children: null,
	className: '',
	isAuxiliary: false,
	isDisabled: false,
	isFullWidth: false,
	isLink: false,
	isLoading: false,
	isPrimary: false,
	isSubmit: false,
	onClick: null,
	onMouseOut: () => {},
	onMouseOver: () => {},
}

Button.propTypes = {
	/** The contents of the component. */
	children: PropTypes.node,

	/** Additional classes to be applied to the component. */
	className: PropTypes.string,

	/** Whether or not this link is used for an auxiliary action. */
	isAuxiliary: PropTypes.bool,

	/** Whether or not this component should be disabled. */
	isDisabled: PropTypes.bool,

	/** Whether or not this component should look like a link. */
	isLink: PropTypes.bool,

	/** Whether or not this component is in a loading state. */
	isLoading: PropTypes.bool,

	/** Whether or not this button is used for a primary action. */
	isPrimary: PropTypes.bool,

	/** Whether or not this should be a submit button. */
	isSubmit: PropTypes.bool,

	/** The function to be executed when this button is clicked. */
	onClick: PropTypes.func,

	/** The function to be executed when the cursor moves away from this button. */
	onMouseOut: PropTypes.func,

	/** The function to be executed when the cursor moves over this button. */
	onMouseOver: PropTypes.func,
}
