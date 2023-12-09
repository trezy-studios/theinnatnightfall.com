// Module imports
import {
	faDiscord,
	faItchIo,
	faSteam,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





// Local imports
import styles from './Footer.module.scss'

import { faEpicGames } from '../../icons/faEpicGames.js'
import { faHumbleBundle } from '../../icons/faHumbleBundle.js'
import { Link } from '../Link/Link.jsx'





export function Footer() {
	return (
		<footer className={styles['footer']}>
			<small className={styles['copyright']}>
				<span>
					{`© ${new Date().getFullYear()} `}

					<Link href={'https://trezy.studio/'}>
						{'Trezy Studios, LLC'}
					</Link>

					{'. '}
				</span>

				<span>
					{'All rights reserved.'}
				</span>
			</small>

			<div className={styles['social-links']}>
				<Link
					className={styles['steam']}
					href={'/steam'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faSteam} />
				</Link>

				<Link
					className={styles['itch']}
					href={'/itch'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faItchIo} />
				</Link>

				<Link
					className={styles['discord']}
					href={'https://trezy.studio/discord'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faDiscord} />
				</Link>

				<Link
					className={styles['bsky']}
					href={'https://trezy.studio/bsky'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faCloud} />
				</Link>

				<Link
					className={styles['youtube']}
					href={'https://trezy.studio/youtube'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faYoutube} />
				</Link>
			</div>
		</footer>
	)
}
