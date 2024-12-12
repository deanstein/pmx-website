<script>
	imageAttributesCollection;
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGUpNext
	} from 'jdg-ui-svelte';
	import imageAttributesCollection from '../image-attributes-collection';
	import { jdgSharedUrls } from 'jdg-ui-svelte/jdg-shared-strings.js';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating title={'ABOUT'} >
        ...
	</JDGContentBoxFloating>
	<JDGUpNext
		item1Label={'SEE ALL DESIGNS'}
		item1Href={'/'}
		item1ImageAttributes={imageAttributesCollection.product_line_1}
		item2Label={'ABOUT PMX3D'}
		item2Href="/about"
		item2ImageAttributes={imageAttributesCollection.gh_script_0}
		item2ObjectPosition="right"
		item3Label="GET IN TOUCH"
		item3Href="/contact"
		item3ImageAttributes={imageAttributesCollection.coaster_028A_0}
	/>
</JDGContentContainer>
