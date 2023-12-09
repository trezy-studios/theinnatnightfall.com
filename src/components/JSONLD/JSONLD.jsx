// Module imports
import NextHead from 'next/head.js'
import { useMemo } from 'react'





export function JSONLD(props) {
	const { data } = props

	const dataString = useMemo(() => {
		return JSON.stringify(data)
	}, [data])

	return (
		<NextHead>
			<script
				dangerouslySetInnerHTML={{ __html: dataString }}
				type={'application/ld+json'} />
		</NextHead>
	)
}
