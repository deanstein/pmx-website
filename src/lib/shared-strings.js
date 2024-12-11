export const sharedStyles = {
	overlayColorDarkRgba: 'rgba(50, 50, 50, 0.8)'
};

export const sharedUrls = {
	websiteIconSrc:
		'https://res.cloudinary.com/jdg-main/image/upload/v1720834639/jdg-website/jdg-logo.jpg'
};

export const pageMeta = {
	get titleTemplate() {
		return '%s | ' + this.home.title;
	},
	home: {
		title: 'PARAMETRIX3D',
		description: '3D-printed products designed using visual scripting'
	},
	about: {
		title: 'About',
		description: 'About PMX3D',
		url: '/about'
	},
	contact: {
		title: 'Contact',
		description: 'Contact PMX3D',
		url: '/contact'
	}
};
