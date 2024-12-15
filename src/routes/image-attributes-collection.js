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
	planter_003F_0: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1723693178/pmx-website/003F-0.jpg'
			),
			imgCaption: 'Advanced Planter'
		})
	),
	planter_003F_1: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1726422539/pmx-website/003F-1.jpg'
			),
			imgCaption: 'Advanced Planter'
		})
	),
	kitchen_caddy_007F_0: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1723696902/pmx-website/007F-0.jpg'
			),
			imgCaption: 'Kitchen Caddy'
		})
	),
	pen_holder_008I_0: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1723693771/pmx-website/008I-0.jpg'
			),
			imgCaption: 'Pen Holder'
		})
	),
	card_holder_015C_0: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1723694838/pmx-website/015C-0.jpg'
			),
			imgCaption: 'Business Card Holder'
		})
	),
	cityscape_021A_0: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1723693930/pmx-website/021A-0.jpg'
			),
			imgCaption: 'Denver Cityscape'
		})
	),
	cityscape_021A_multiple_1: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1734284550/pmx-website/021A-multiple-1.jpg'
			),
			imgCaption: 'Several Denver Cityscapes'
		})
	),
	coaster_028A_0: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1723696691/pmx-website/028A-0.jpg'
			),
			imgCaption: 'Denver Map Coaster'
		})
	),
	puzzle_decor_030A_0: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1723693838/pmx-website/030A-0.jpg'
			),
			imgCaption: 'Puzzle Decor'
		})
	),
	grinder_039A_0: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1723696392/pmx-website/039A-0.jpg'
			),
			imgCaption: 'Herb Grinder'
		})
	),
	den_co_magnets_047BC_0: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1723695383/pmx-website/047BC-0.jpg'
			),
			imgCaption: 'DEN/CO Magnets'
		})
	),
	co_topo_magnet_047D_0: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1723695588/pmx-website/047D-0.jpg'
			),
			imgCaption: 'Colorado Topography Magnet'
		})
	)
};

export default imageAttributesCollection;
