export const SITE = {
	title: 'Syscraft',
	description: 'A community for Minecraft server admins, developers and hosts.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/syscraft-mc/syscraft.dev/blob/main`;

export const COMMUNITY_INVITE_URL = `https://discord.gg/Dx6SSkx`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Admin': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Page 2', link: 'en/page-2' },
			{ text: 'Page 3', link: 'en/page-3' },
		],
		'Develop': [{ text: 'Page 4', link: 'en/page-4' }],
		'Host': [{ text: 'Page 4', link: 'en/page-4' }],
	},
};
