import {
	addCloudinaryUrlTransformation,
	instantiateObject,
	postProcessImageAttributes
} from 'jdg-ui-svelte/jdg-utils.js';
import jdgImageAttributes from 'jdg-ui-svelte/schemas/jdg-image-attributes.js';

const imageAttributesCollection = {
	gh_script_1: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1725918467/pmx-website/gh-script-1.jpg'
			),
			imgCaption:
				'A Grasshopper script which uses nodes and connections to create a flexible set of instructions which generate a final 3D model.'
		})
	),
	gh_script_1_transparent: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1734286358/pmx-website/gh-script-1-transparent.png'
			),
			imgCaption:
				'A Grasshopper script which uses nodes and connections to create a flexible set of instructions which generate a final 3D model.'
		})
	),
	product_line_1: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1725919763/pmx-website/product-line-1.jpg'
			),
			imgCaption:
				'A Grasshopper script which uses nodes and connections to create a flexible set of instructions that generates a final 3D model.'
		})
	),
	recycling_1: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1734285229/pmx-website/recycling-1.jpg'
			),
			imgCaption: 'A collection of failed or experimental prints ready for recycling.'
		})
	),
	products: {
		PLANTER_003D_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1735858459/pmx-website/products/003D-1.jpg'
				),
				imgCaption: 'Advanced Planter'
			})
		),
		PLANTER_003D_2: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1735858459/pmx-website/products/003D-2.jpg'
				),
				imgCaption: 'Advanced Planter'
			})
		),
		PLANTER_003D_3: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1735858459/pmx-website/products/003D-3.jpg'
				),
				imgCaption: 'Advanced Planter'
			})
		),
		PLANTER_003F_0: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1736139000/pmx-website/products/003F-0.jpg'
				),
				imgCaption: 'Advanced Planter'
			})
		),
		PLANTER_003F_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1735858270/pmx-website/products/003F-1.jpg'
				),
				imgCaption: 'Advanced Planter'
			})
		),
		PLANTER_003F_2: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1735858270/pmx-website/products/003F-2.jpg'
				),
				imgCaption: 'Advanced Planter'
			})
		),
		PLANTER_003F_3: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1735858270/pmx-website/products/003F-3.jpg'
				),
				imgCaption: 'Advanced Planter'
			})
		),
		KITCHEN_CADDY_007F_0: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1736137982/pmx-website/products/007F-0.jpg'
				),
				imgCaption: 'Kitchen Caddy'
			})
		),
		KITCHEN_CADDY_007F_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1736127017/pmx-website/products/007F-1.jpg'
				),
				imgCaption: 'Kitchen Caddy'
			})
		),
		KITCHEN_CADDY_007F_2: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1736124871/pmx-website/products/007F-2.jpg'
				),
				imgCaption: 'Kitchen Caddy'
			})
		),
		KITCHEN_CADDY_007G_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1736125859/pmx-website/products/007G-1.jpg'
				),
				imgCaption: 'Kitchen Caddy'
			})
		),
		KITCHEN_CADDY_007G_2: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1736125859/pmx-website/products/007G-2.png'
				),
				imgCaption: 'Kitchen Caddy'
			})
		),
		PEN_HOLDER_008A_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1735921146/pmx-website/products/008A-1.jpg'
				),
				imgCaption: 'Pen Holder'
			})
		),
		PEN_HOLDER_008A_2: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1735921146/pmx-website/products/008A-2.jpg'
				),
				imgCaption: 'Pen Holder'
			})
		),
		PEN_HOLDER_008F_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1735921339/pmx-website/products/008F-1.jpg'
				),
				imgCaption: 'Pen Holder'
			})
		),
		PEN_HOLDER_008F_2: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1735921339/pmx-website/products/008F-2.jpg'
				),
				imgCaption: 'Pen Holder'
			})
		),
		PEN_HOLDER_008I_0: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723693771/pmx-website/products/008I-0.jpg'
				),
				imgCaption: 'Pen Holder'
			})
		),
		PEN_HOLDER_008I_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1735921373/pmx-website/products/008I-1.jpg'
				),
				imgCaption: 'Pen Holder'
			})
		),
		CARD_HOLDER_015C_0: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723694838/pmx-website/products/015C-0.jpg'
				),
				imgCaption: 'Business Card Holder'
			})
		),
		CARD_HOLDER_015C_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1736014254/pmx-website/products/015C-1.jpg'
				),
				imgCaption: 'Business Card Holder'
			})
		),
		CARD_HOLDER_015C_2: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1736014254/pmx-website/products/015C-2.jpg'
				),
				imgCaption: 'Business Card Holder'
			})
		),
		CARD_HOLDER_015C_3: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1736014254/pmx-website/products/015C-3.jpg'
				),
				imgCaption: 'Business Card Holder'
			})
		),
		CARD_HOLDER_015C_4: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1736014254/pmx-website/products/015C-4.jpg'
				),
				imgCaption: 'Business Card Holder'
			})
		),
		CARD_HOLDER_015C_5: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1736014254/pmx-website/products/015C-5.jpg'
				),
				imgCaption: 'Business Card Holder'
			})
		),
		CITYSCAPE_021A_0: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723693930/pmx-website/products/021A-0.jpg'
				),
				imgCaption: 'Denver Cityscape'
			})
		),
		CITYSCAPE_021A_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1734578666/pmx-website/products/021A-1.jpg'
				),
				imgCaption: 'The Denver Cityscape'
			})
		),
		CITYSCAPE_021A_2: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1734578666/pmx-website/products/021A-2.jpg'
				),
				imgCaption: 'The Denver Cityscape'
			})
		),
		CITYSCAPE_021A_3: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1734578666/pmx-website/products/021A-3.jpg'
				),
				imgCaption: 'The Denver Cityscape'
			})
		),
		CITYSCAPE_021A_4: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1734578666/pmx-website/products/021A-4.jpg'
				),
				imgCaption:
					'The back of the Denver Cityscape displays numbers for each building, which can be referenced with the legend for each version to reveal building name and address.'
			})
		),
		CITYSCAPE_021A_multiple_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1734284550/pmx-website/products/021A-multiple-1.jpg'
				),
				imgCaption: 'Several Denver Cityscapes'
			})
		),
		COASTER_028A_0: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723696691/pmx-website/products/028A-0.jpg'
				),
				imgCaption: 'Denver Map Coaster'
			})
		),
		COASTER_028A_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1736102175/pmx-website/products/028A-1.jpg'
				),
				imgCaption: 'Denver Map Coaster'
			})
		),
		COASTER_028A_2: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1736102174/pmx-website/products/028A-2.jpg'
				),
				imgCaption: 'Denver Map Coaster'
			})
		),
		DECOR_030A_0: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723693838/pmx-website/products/030A-0.jpg'
				),
				imgCaption: 'Puzzle Decor'
			})
		),
		DECOR_030A_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1735783263/pmx-website/products/030A-1.jpg'
				),
				imgCaption: 'Puzzle Decor'
			})
		),
		DECOR_030A_2: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1735783263/pmx-website/products/030A-2.jpg'
				),
				imgCaption: 'Puzzle Decor'
			})
		),
		DECOR_030A_3: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1735783263/pmx-website/products/030A-3.jpg'
				),
				imgCaption: 'Puzzle Decor'
			})
		),
		GRINDER_039A_0: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1723696392/pmx-website/products/039A-0.jpg'
				),
				imgCaption: 'Herb Grinder'
			})
		),
		GRINDER_039A_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1736101386/pmx-website/products/039A-1.jpg'
				),
				imgCaption: 'Herb Grinder'
			})
		),
		GRINDER_039A_2: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1736101386/pmx-website/products/039A-2.jpg'
				),
				imgCaption: 'Herb Grinder'
			})
		),
		GRINDER_039A_3: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1736101386/pmx-website/products/039A-3.jpg'
				),
				imgCaption: 'Herb Grinder'
			})
		),
		MAGNET_CO_047B_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1736018862/pmx-website/products/047B-1.jpg'
				),
				imgCaption: 'CO Magnet'
			})
		),
		MAGNET_DEN_047C_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1736018862/pmx-website/products/047C-1.jpg'
				),
				imgCaption: 'DEN Magnet'
			})
		),
		MAGNET_DEN_CO_047BC_0: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1736136768/pmx-website/products/047BC-0.jpg'
				),
				imgCaption: 'DEN/CO Magnets'
			})
		),
		MAGNET_CO_TOPO_047D_0: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1736137296/pmx-website/products/047D-0.jpg'
				),
				imgCaption: 'Colorado Topography Magnet'
			})
		),
		MAGNET_CO_TOPO_047D_1: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1736019250/pmx-website/products/047D-1.jpg'
				),
				imgCaption: 'Colorado Topography Magnet'
			})
		),
		MAGNET_CO_TOPO_047D_2: postProcessImageAttributes(
			instantiateObject(jdgImageAttributes, {
				imgSrc: addCloudinaryUrlTransformation(
					'https://res.cloudinary.com/jdg-main/image/upload/v1736019251/pmx-website/products/047D-2.jpg'
				),
				imgCaption: 'Colorado Topography Magnet'
			})
		)
	}
};

export default imageAttributesCollection;
