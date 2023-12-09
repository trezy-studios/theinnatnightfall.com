// Local imports
import { Heading } from './Heading/Heading.jsx'
import { Link } from './Link/Link.jsx'





function MDXHeading(level) {
	return props => (
		<Heading
			level={level}
			{...props} />
	)
}

export const MDXComponents = {
	a: Link,
	h1: MDXHeading(1),
	h2: MDXHeading(2),
	h3: MDXHeading(3),
	h4: MDXHeading(4),
	h5: MDXHeading(5),
	h6: MDXHeading(6),
}
