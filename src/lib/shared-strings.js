export const sharedStrings = {
	availability: 'AVAILABILITY',
	details: 'DETAILS',
	downloadFaIconClass: 'fa-solid fa-caret-down',
	downloadCGTrader: 'DOWNLOAD FROM CGTRADER'
};

export const sharedStyles = {
	overlayColorDarkRgba: 'rgba(50, 50, 50, 0.8)'
};

export const sharedUrls = {
	productsHref: '/products/',
	websiteIconSrc:
		'https://res.cloudinary.com/jdg-main/image/upload/v1733979906/pmx-website/pmx-icon.png'
};

// hrefCode can't change, otherwise inbound links may break!
export const productMeta = {
	PLANTER_003: {
		displayCode: '003',
		hrefCode: '003',
		name: 'Advanced Planter',
		tagline: 'Give plants what they want',
		variants: {
			D: {
				displayCode: 'd'
			},
			F: {
				displayCode: 'f'
			}
		}
	},
	PEN_HOLDER_008: {
		displayCode: '008',
		hrefCode: '008',
		name: 'Pen Holder',
		tagline: 'Pens always within reach',
		variants: {
			A: {
				displayCode: 'a'
			},
			F: {
				displayCode: 'f'
			},
			I: {
				displayCode: 'i'
			}
		}
	},
	CARD_HOLDER_015: {
		displayCode: '015',
		hrefCode: '015',
		name: 'Card Holder',
		tagline: 'Proudly display your cards',
		variants: {
			C: {
				displayCode: 'c'
			}
		}
	},
	CITYSCAPE_021: {
		displayCode: '021',
		hrefCode: '021',
		name: 'Denver Cityscape',
		tagline: 'Denver in the palm of your hands',
		variants: {
			A: {
				displayCode: 'a'
			}
		}
	},
	COASTER_028: {
		displayCode: '028',
		hrefCode: '028',
		name: 'Denver Map Coaster',
		tagline: 'Put Denver under your mug',
		variants: {
			A: {
				displayCode: 'a'
			}
		}
	},
	DECOR_030: {
		displayCode: '030',
		hrefCode: '030',
		name: 'Puzzle Decor',
		tagline: 'A challenge to assemble, a reward in art',
		variants: {
			A: {
				displayCode: 'a'
			}
		}
	},
	GRINDER_039: {
		displayCode: '039',
		hrefCode: '039',
		name: 'Herb Grinder',
		tagline: 'Grind with ease, dispense with precision',
		variants: {
			A: {
				displayCode: 'a'
			}
		}
	},
	MAGNET_047: {
		displayCode: '047',
		hrefCode: '047',
		name: 'Geographic Magnet',
		tagline: 'A magnetic way to show state pride',
		variants: {
			B: {
				displayCode: 'b',
				name: 'DEN / CO Magnets'
			},
			C: {
				displayCode: 'c',
				name: 'DEN / CO Magnets'
			},
			D: {
				displayCode: 'd',
				name: 'CO Topo Magnet'
			}
		}
	}
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
		PLANTER_003: {
			title: productMeta.PLANTER_003.name,
			description: `The ${productMeta.PLANTER_003.name} by PMX3D. ${productMeta.PLANTER_003.tagline}.`,
			href: sharedUrls.productsHref + productMeta.PLANTER_003.hrefCode
		},
		PEN_HOLDER_008: {
			title: productMeta.PEN_HOLDER_008.name,
			description: `The ${productMeta.PEN_HOLDER_008.name} by PMX3D. ${productMeta.PEN_HOLDER_008.tagline}.`,
			href: sharedUrls.productsHref + productMeta.PEN_HOLDER_008.hrefCode
		},
		CARD_HOLDER_015: {
			title: productMeta.CARD_HOLDER_015.name,
			description: `The ${productMeta.CARD_HOLDER_015.name} by PMX3D. ${productMeta.CARD_HOLDER_015.tagline}.`,
			href: sharedUrls.productsHref + productMeta.CARD_HOLDER_015.hrefCode
		},
		CITYSCAPE_021: {
			title: productMeta.CITYSCAPE_021.name,
			description: `The ${productMeta.CITYSCAPE_021.name} by PMX3D. ${productMeta.CITYSCAPE_021.tagline}.`,
			href: sharedUrls.productsHref + productMeta.CITYSCAPE_021.hrefCode
		},
		COASTER_028: {
			title: productMeta.COASTER_028.name,
			description: `The ${productMeta.COASTER_028.name} by PMX3D. ${productMeta.COASTER_028.tagline}.`,
			href: sharedUrls.productsHref + productMeta.COASTER_028.hrefCode
		},
		DECOR_030: {
			title: productMeta.DECOR_030.name,
			description: `The ${productMeta.DECOR_030.name} by PMX3D. ${productMeta.DECOR_030.tagline}.`,
			href: sharedUrls.productsHref + productMeta.DECOR_030.hrefCode
		},
		GRINDER_039: {
			title: productMeta.GRINDER_039.name,
			description: `The ${productMeta.GRINDER_039.name} by PMX3D. ${productMeta.GRINDER_039.tagline}.`,
			href: sharedUrls.productsHref + productMeta.GRINDER_039.hrefCode
		},
		MAGNET_047: {
			title: productMeta.MAGNET_047.name,
			description: `The ${productMeta.MAGNET_047.name} by PMX3D. ${productMeta.MAGNET_047.tagline}.`,
			href: sharedUrls.productsHref + productMeta.MAGNET_047.hrefCode
		}
	}
};
