// Module imports
import { DefaultSeo as DefaultSEO } from 'next-seo'





// Local imports
import { JSONLD } from '../JSONLD/JSONLD.jsx'





// Constants
const JSON_LD = {
	'@context': 'https://schema.org',
	'@type': [
		'VideoGame',
		'SoftwareApplication',
	],
	accessibilityControl: [
		'fullKeyboardControl',
		'fullMouseControl',
	],
	accessibilityFeature: [
		'alternativeText',
		'ARIA',
		'displayTransformability',
		'highContrastDisplay',
		'unlocked',
	],
	accessibilityHazard: [
		'noFlashingHazard',
		'noMotionSimulationHazard',
	],
	accessibilitySummary: 'Users can change fonts, font sizes, and interface colors to improve readability. They can also apply filters to improve readability if the player suffers from color vision deficiency (colorblindness).',
	accessMode: 'visual',
	applicationCategory: [
		'GameApplication',
		'MultimediaApplication',
	],
	applicationSubCategory: [
		'https://www.wikidata.org/wiki/Q1610017',
		'simulation game',
	],
	copyrightHolder: {
		type: 'Organization',
		sameAs: 'https://trezy.studio',
		name: 'Trezy Studios',
	},
	copyrightNotice: '© 2023 Trezy Studios, LLC. All rights reserved.',
	copyrightYear: 2023,
	datePublished: '2023-06-02T05:00:00.000Z',
	description: 'Manage an inn for travelers seeking refuge before nightfall. Interact with diverse guests, each harboring their own secrets. Your choices can forge or fracture relationships, uncovering hidden truths along the way. But beware – the real threat may be hiding among your guests.',
	gamePlatform: [
		'PC',
	],
	inLanguage: [
		'English',
	],
	keywords: [
		'2d',
		'2dimensional',
		'2-dimensional',
		'2 dimensional',
		'alternatehistory',
		'alternate history',
		'alternate-history',
		'casual',
		'choose your own adventure',
		'darkfantasy',
		'dark-fantasy',
		'dark fantasy',
		'darkhumor',
		'dark-humor',
		'dark humor',
		'fantasy',
		'firstperson',
		'first-person',
		'first person',
		'gothic',
		'handdrawn',
		'hand-drawn',
		'hand drawn',
		'horror',
		'mystery',
		'puzzle',
		'pve',
		'player v environment',
		'player vs environment',
		'procgen',
		'proceduralgeneration',
		'procedural-generation',
		'procedural generation',
		'rpg',
		'simulation',
		'singleplayer',
		'single-player',
		'single player',
		'stylized',
	],
	memoryRequirements: '1 GB',
	name: 'The Inn at Nightfall',
	numberOfPlayers: 1,
	offers: [],
	operatingSystem: [
		'Windows',
		'Mac OS',
		'Linux',
	],
	playMode: 'SinglePlayer',
	processorRequirements: '500 MHz',
	producer: {
		type: 'Organization',
		sameAs: 'https://trezy.studio',
		name: 'Trezy Studios',
	},
	publisher: {
		type: 'Organization',
		sameAs: 'https://trezy.studio',
		name: 'Trezy Studios',
	},
	review: [],
	url: 'https://theinnatnightfall.com',
}
const OG_PROPERTIES = {
	type: 'website',
	locale: 'en_US',
	url: 'https://theinnatnightfall.com/',
	siteName: 'The Inn at Nightfall',
}
const TWITTER_PROPERTIES = {
	handle: '@TrezyStudios',
	site: '@TrezyStudios',
	cardType: 'summary_large_image',
}





function DefaultSEOWrapper() {
	return (
		<>
			<JSONLD data={JSON_LD} />

			<DefaultSEO
				defaultTitle={'The Inn at Nightfall'}
				openGraph={OG_PROPERTIES}
				themeColor={'#d14747'}
				titleTemplate={'%s | The Inn at Nightfall'}
				twitter={TWITTER_PROPERTIES} />
		</>
	)
}

export {
	DefaultSEOWrapper as DefaultSEO,
}
