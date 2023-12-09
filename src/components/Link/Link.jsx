// Style imports
import buttonStyles from '../Button/Button.module.scss'
import styles from './Link.module.scss'





// Module imports
import classnames from 'classnames'
import NextLink from 'next/link.js'
import PropTypes from 'prop-types'
import { useMemo } from 'react'





// Local imports
import { ExternalLink } from '../ExternalLink/ExternalLink.jsx'





/**
 * Handles ambiguous links, wrapping them with whichever component is most appropriate.
 *
 * @param {object} props All props.
 * @param {import('react').ReactNode} props.children The contents of the component.
 * @param {string} [props.className] Additional classes to be applied to the component.
 * @param {boolean} [props.isAuxiliary=false] Whether or not this link is used for an auxiliary action (only valid if `isButton` is true).
 * @param {boolean} [props.isButton=false] Whether or not this component should look like a button.
 * @param {boolean} [props.isLink=false] Whether or not this link should look like a link (only valid if `isButton` is true).
 * @param {boolean} [props.isPrimary=false] Whether or not this link is used for a primary action (only valid if `isButton` is true).
 * @param {string} [props.title] The title to display when hovering over the link.
 * @param {string} props.href The URL to which this link leads.
 */
export function Link(props) {
	const {
		children,
		className,
		href,
		isAuxiliary,
		isButton,
		isLink,
		isPrimary,
		title,
	} = props

	const compiledClassName = useMemo(() => {
		return classnames(className, styles['link'], {
			[buttonStyles.button]: isButton,
			[buttonStyles['is-auxiliary']]: isButton && isAuxiliary,
			[buttonStyles['is-link']]: isButton && isLink,
			[buttonStyles['is-primary']]: isButton && isPrimary,
		})
	}, [
		className,
		isAuxiliary,
		isButton,
		isLink,
		isPrimary,
	])

	// eslint-disable-next-line security/detect-unsafe-regex
	if (/^(?:https?:)?\/\//u.test(href)) {
		return (
			<ExternalLink
				className={compiledClassName}
				href={href}
				title={title}>
				{children}
			</ExternalLink>
		)
	}

	return (
		<NextLink
			className={compiledClassName}
			href={href}
			title={title}>
			{children}
		</NextLink>
	)
}

Link.defaultProps = {
	children: null,
	className: '',
	isAuxiliary: false,
	isButton: false,
	isLink: false,
	isPrimary: false,
	title: '',
}

Link.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	href: PropTypes.string.isRequired,
	isAuxiliary: PropTypes.bool,
	isButton: PropTypes.bool,
	isLink: PropTypes.bool,
	isPrimary: PropTypes.bool,
	title: PropTypes.string,
}
