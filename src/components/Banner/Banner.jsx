// Local imports
import Image from 'next/image.js'
import LogoImage from '../../../public/logo.png'
import styles from './Banner.module.scss'





export function Banner() {
	return (
		<header
			className={styles['banner']}
			role={'banner'}>
			<div className={styles['brand']}>
				<Image
					alt={'The Inn at Nightfall logo'}
					placeholder={'blur'}
					priority
					src={LogoImage}
					width={200} />
			</div>
		</header>
	)
}
