// Module imports
import Image from 'next/image.js'





// Local imports
import styles from './HomePage.module.scss'

import { Heading } from '../Heading/Heading.jsx'
import { Link } from '../Link/Link.jsx'
import LogoImage from '../../../public/logo.png'
import { PageContent } from '../PageContent/PageContent.jsx'
import { PageSection } from '../PageSection/PageSection.jsx'





export function HomePage() {
	return (
		<PageContent title={'Home'}>
			<PageSection>
				<div className={styles['description']}>
					<p>{'At a solitary crossroads stands an unassuming inn. Its modest wooden façade, the flickering glow of candles warding off the encroaching night, and the surrounding dirt roads winding through dense forests might seem commonplace. Yet, unbeknownst to many, this inn is a beacon of safety on these perilous paths. Hidden within the looming trees lurks a malevolent presence, an evil held at bay by only the sacred threshold of the inn.'}</p>

					<p>{'As the inn\'s proprietor, your duty extends beyond mere hospitality. Your task is to safeguard weary travelers by vetting each guest before granting entry. While genuine guests offer coin for shelter, an ever-present threat looms — the darkness also seeks an invitation. The question stands: can you discern friend from foe and keep the darkness at bay?'}</p>

					<p>
						{'Coming soon on '}
						<Link href={'/steam'}>
							{'Steam'}
						</Link>
						{'.'}
					</p>
				</div>
			</PageSection>
		</PageContent>
	)
}
