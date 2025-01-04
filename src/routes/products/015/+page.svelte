<script>
	import imageAttributesCollection from '../../image-attributes-collection';
	import { pageMeta, productMeta, sharedStrings } from '$lib/shared-strings';

	import { JDGContentBoxFloating, JDGContentContainer } from 'jdg-ui-svelte';
	import ProductDetailsSection from '../../../components/ProductDetailsSection.svelte';
	import ProductTypeContainer from '../../../components/ProductTypeContainer.svelte';
	import UpNext from '../../../components/UpNext.svelte';
	import { accentColors } from '$lib/shared-styles';

	// display model numbers consistently
	const model015C =
		productMeta.CARD_HOLDER_015.displayCode + productMeta.CARD_HOLDER_015.variants.C.displayCode;
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title={pageMeta.products.CARD_HOLDER_015.title.toUpperCase()}
		titleColor={accentColors[2]}
		subtitle={productMeta.CARD_HOLDER_015.tagline}
	>
		<ProductTypeContainer
			imageAttributeObjects={[
				imageAttributesCollection.products.CARD_HOLDER_015C_1,
				imageAttributesCollection.products.CARD_HOLDER_015C_2,
				imageAttributesCollection.products.CARD_HOLDER_015C_3,
				imageAttributesCollection.products.CARD_HOLDER_015C_4,
				imageAttributesCollection.products.CARD_HOLDER_015C_5
			]}
		>
			<ProductDetailsSection sectionTitle={`MODEL ${model015C}`}>
				Six interlocking rings create a modernist decorative sphere.
				<br /><br />
				Assemble the rings in order from smallest to largest. Orientation is key.
			</ProductDetailsSection>
			<ProductDetailsSection sectionTitle={sharedStrings.details}>
				Dimensions: 4.00"W x 4.00"D x 4.00"H
				<br />
				Latest version: v1.0.4
			</ProductDetailsSection>
			<ProductDetailsSection sectionTitle={sharedStrings.availability}>
				<a
					href="https://www.cgtrader.com/3d-print-models/house/decor/030a-decorative-sphere-puzzle"
					target="_blank"
					class="no-initial-highlight"
				>
					<div class="icon-and-text">
						<i class={sharedStrings.downloadFaIconClass} />
						<span>{sharedStrings.downloadCGTrader}</span>
					</div>
				</a>
			</ProductDetailsSection>
		</ProductTypeContainer>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
