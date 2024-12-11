import {
	addCloudinaryUrlTransformation,
	instantiateObject,
	postProcessImageAttributes
} from 'jdg-ui-svelte/jdg-utils.js';
import jdgImageAttributes from 'jdg-ui-svelte/schemas/jdg-image-attributes.js';

const imageAttributesCollection = {
	gh_script_0: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1725918467/pmx-website/gh-script-1.jpg'
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
	),
	pivot_chair_ottoman_composite: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1733207307/jdg-website/ind/pivot-chair-ottoman-composite.png'
			),
			imgCaption:
				'The Pivot Chair and Pivot Ottoman in a folded configuration for seating, and a flat configuration for sleeping'
		})
	),
	pivot_chair_ottoman_flat: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1733206977/jdg-website/ind/pivot-chair-ottoman-flat.png'
			),
			imgCaption: 'The Pivot Chair and Pivot Ottoman in a flat configuration for sleeping'
		})
	),
	pivot_chair_ottoman_folded: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1733206978/jdg-website/ind/pivot_ottoman_-_folded.png'
			),
			imgCaption: 'The Pivot Chair and Pivot Ottoman in a folded configuration for seating'
		})
	),
	pivot_chair_model_1: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1733200389/jdg-website/ind/pivot-chair-model-1.png'
			),
			imgCaption: 'A model of the Pivot Chair'
		})
	),
	pivot_chair_model_1_transparent: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1733120898/jdg-website/ind/pivot-chair-model-1-transparent.png'
			),
			imgCaption: 'A model of the Pivot Chair'
		})
	),
	pivot_chair_photo_1: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1733205174/jdg-website/ind/pivot-chair-photo-1.jpg'
			),
			imgCaption: 'A built prototype of the Pivot Chair'
		})
	),
	pivot_chair_positions_all: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1733193012/jdg-website/ind/pivot-chair-positions-all.png'
			),
			imgCaption: 'Some possible positions of the Pivot Chair'
		})
	)
};

export default imageAttributesCollection;
