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
</script>

<JDGContentContainer>
	<JDGContentBoxFloating title={'ABOUT'}>
		<JDGBodyCopy paddingTop="0" textAlign="center" textWrap="balance">
			Parametrix3D is a design collaborative making mathematically-generated products for life and
			home.
		</JDGBodyCopy>
		<JDGAccentText secondaryText="WE BELIEVE IN VISUAL SCRIPTING" textColor={jdgColors.text} />
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
		<JDGAccentText secondaryText="WE BELIEVE IN DESIGN AND QUALITY" textColor={jdgColors.text} />
		<JDGImageFullWidth
			imageAttributes={imageAttributesCollection.cityscape_021A_multiple_1}
			maxHeight="300px"
		/>
		<JDGBodyCopy paddingTop="0">
			We have high standards. We design objects that serve needs, satisfy wants, and look great in a
			variety of contexts. We use our products at home, because we believe in them.
			<br /><br />
			Where sold physically, our designs exhibit high print quality, and we don't put anything on the
			shelf that doesn't meet our strict quality control criteria.
		</JDGBodyCopy>
		<JDGAccentText secondaryText="WE BELIEVE IN MINIMAL PACKAGING" textColor={jdgColors.text} />
		<JDGImageFullWidth
			imageAttributes={imageAttributesCollection.product_line_1}
			maxHeight="300px"
		/>
		<JDGBodyCopy paddingTop="0">
			Where we sell physical models, we think the focus should be on the product, and not on the
			packaging. So we've minimized our packaging to put our designs front and center, and to reduce
			our footprint.
		</JDGBodyCopy>
		<JDGAccentText secondaryText="WE BELIEVE IN RECYCLING" textColor={jdgColors.text} />
		<JDGImageFullWidth imageAttributes={imageAttributesCollection.recycling_1} maxHeight="300px" />
		<JDGBodyCopy paddingTop="0">
			During fabrication, we strive to keep our failure rate low. But accidents happen, and we
			generate more plastic waste than we'd like. We ship our failed prints and waste to Filabot,
			who can turn it into usable filament for more prototyping.
			<br /><br />
			If you have a 3D printed product that is at the end of its life, we recommend you send your unused
			prints to Filabot.
		</JDGBodyCopy>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
