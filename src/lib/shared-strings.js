export const sharedStyles = {
	overlayColorDarkRgba: 'rgba(50, 50, 50, 0.8)'
};

export const sharedUrls = {
	websiteIconSrc:
		'https://res.cloudinary.com/jdg-main/image/upload/v1733979906/pmx-website/pmx-icon.png'
};

export const pageMeta = {
	get titleTemplate() {
		return '%s | ' + this.home.title;
	},
	home: {
		title: 'PMX3D',
		description: '3D-printed products designed using visual scripting'
	},
	about: {
		title: 'About',
		description: 'About PMX3D',
		href: '/about'
	},
	contact: {
		title: 'Contact',
		description: 'Contact PMX3D',
		href: '/contact'
	},
	products: {
		CITYSCAPE_021: {
			title: 'Denver Cityscape',
			description: 'The Denver Cityscape by PMX3D',
			href: '/products/021'
		},
		PUZZLE_030: {
			title: 'Puzzle Decor',
			description: 'Puzzle Decor by PMX3D',
			href: '/products/030'
		}
	}
};
