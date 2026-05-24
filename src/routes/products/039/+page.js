import imageMetaRegistry from '$lib/image-meta-registry';
import { pageMeta } from '$lib/shared-strings';

export const load = () => {
	// define page meta tags for social media previews
	const pageMetaTags = Object.freeze({
		title: pageMeta.products.GRINDER_039.title,
		description: pageMeta.products.GRINDER_039.description,
		openGraph: {
			title: pageMeta.products.GRINDER_039.title,
			description: pageMeta.products.GRINDER_039.description,
			images: [
				{
					url: imageMetaRegistry.products.GRINDER_039A_0.imgSrc,
					width: 800,
					height: 600,
					type: 'image/jpeg'
				}
			]
		}
	});
	return { pageMetaTags };
};
