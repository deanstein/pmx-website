<script>
	imageAttributesCollection;
	import {
		JDGAccentText,
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGImageFullWidth
	} from 'jdg-ui-svelte';
	import { jdgColors } from 'jdg-ui-svelte/jdg-shared-styles.js';
	import imageAttributesCollection from '../image-attributes-collection';
	import UpNext from '../../components/UpNext.svelte';
	import { jdgSharedUrls } from 'jdg-ui-svelte/jdg-shared-strings.js';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating title={'ABOUT PMX3D'}>
		<JDGBodyCopy paddingTop="0" paddingBottom="0" textAlign="center" textWrap="balance">
			PMX3D is an industrial design collaborative founded by architect and technologist <a
				href="https://jdeangoldstein.com"
				target="_blank">Joshua Goldstein</a
			>.
		</JDGBodyCopy>
		<JDGBodyCopy paddingTop="0" paddingBottom="0" textAlign="center" textWrap="balance">
			Short for Parametrix3D, PMX3D creates <i>parametrically-generated</i> products for life and home.
		</JDGBodyCopy>
		<JDGBodyCopy paddingTop="0" textAlign="center" textWrap="balance">
			Here's what we're about:
		</JDGBodyCopy>
		<JDGAccentText secondaryText="WE USE VISUAL SCRIPTING" textColor={jdgColors.text} />
		<JDGImageFullWidth
			imageAttributes={imageAttributesCollection.gh_script_1_transparent}
			maxHeight="300px"
		/>
		<JDGBodyCopy paddingTop="0">
			We build algorithms that build great products. Our generative design process allows us to
			refine our designs over and over until they're just right.
			<br /><br />
			Our products are built like software: regularly updated to be their best.
			<br /><br />
			Each design is engraved with a model number and a version number. We use this to track our products
			in the wild and match them with a script and change log, should you contact us with issues or feedback.
		</JDGBodyCopy>
		<JDGAccentText secondaryText="WE CREATE SOPHISTICATED DESIGNS" textColor={jdgColors.text} />
		<JDGImageFullWidth
			imageAttributes={imageAttributesCollection.products.CITYSCAPE_021A_multiple_1}
			maxHeight="300px"
		/>
		<JDGBodyCopy paddingTop="0">
			We have high standards. We design objects that serve needs, satisfy wants, and look great in a
			variety of contexts. We use our products at home, because we believe in them.
			<br /><br />
			Where sold physically, our designs exhibit high print quality, and we don't put anything on the
			shelf that doesn't meet our strict quality control criteria.
		</JDGBodyCopy>
		<JDGAccentText secondaryText="WE USE MINIMAL PACKAGING" textColor={jdgColors.text} />
		<JDGImageFullWidth
			imageAttributes={imageAttributesCollection.product_line_1}
			maxHeight="300px"
		/>
		<JDGBodyCopy paddingTop="0">
			Where we sell physical models, we think the focus should be on the product, and not on the
			packaging. So we've minimized our packaging to put our designs front and center, and to reduce
			our footprint.
		</JDGBodyCopy>
		<JDGAccentText secondaryText="WE MINIMIZE OUR IMPACT" textColor={jdgColors.text} />
		<JDGImageFullWidth imageAttributes={imageAttributesCollection.recycling_1} maxHeight="300px" />
		<JDGBodyCopy paddingTop="0">
			During fabrication, we strive to keep our failure rate low. But accidents happen, and we
			generate more plastic waste than we'd like.
			<br /><br />
			Our products are printed in recyclable plastic, and we partner with recyclers to ensure our waste
			is disposed of properly.
			<br /><br />
			As of 2017, Parametrix3D products are no longer available in-store, but can be downloaded and printed
			from <a href={jdgSharedUrls.pmxCgTrader} target="_blank">CGTrader</a>.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
