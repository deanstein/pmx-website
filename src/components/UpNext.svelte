<script>
	import imageAttributesCollection from '../routes/image-attributes-collection';
	import { JDGUpNext } from 'jdg-ui-svelte';
</script>

<JDGUpNext
	item1Label={'SEE ALL DESIGNS'}
	item1Href={'/'}
	item1ImageAttributes={imageAttributesCollection.product_line_1}
	item2Label={'ABOUT PMX3D'}
	item2Href="/about"
	item2ImageAttributes={imageAttributesCollection.gh_script_1}
	item2ObjectPosition="right"
	item3Label="GET IN TOUCH"
	item3Href="/contact"
	item3ImageAttributes={imageAttributesCollection.products.COASTER_028A_0}
/>
