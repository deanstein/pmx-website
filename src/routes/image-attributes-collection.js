import {
	addCloudinaryUrlTransformation,
	instantiateObject,
	postProcessImageAttributes
} from 'jdg-ui-svelte/jdg-utils.js';
import jdgImageAttributes from 'jdg-ui-svelte/schemas/jdg-image-attributes.js';

const imageAttributesCollection = {
	atc_elevator: postProcessImageAttributes(
		instantiateObject(jdgImageAttributes, {
			imgSrc: addCloudinaryUrlTransformation(
				'https://res.cloudinary.com/jdg-main/image/upload/v1721238891/jdg-website/arch/atc-elevator.jpg'
			)
		})
	)
};

export default imageAttributesCollection;
