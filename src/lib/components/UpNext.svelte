<script>
	import imageMetaRegistry from '../routes/image-attributes-collection';
	import { JDGUpNext } from 'jdg-ui-svelte';
</script>

<JDGUpNext
	item1Label={'SEE ALL DESIGNS'}
	item1Href={'/'}
	item1ImageAttributes={imageMetaRegistry.product_line_1}
	item2Label={'ABOUT PMX3D'}
	item2Href="/about"
	item2ImageAttributes={imageMetaRegistry.gh_script_1}
	item2ObjectPosition="right"
	item3Label="GET IN TOUCH"
	item3Href="/contact"
	item3ImageAttributes={imageMetaRegistry.products.COASTER_028A_0}
/>
