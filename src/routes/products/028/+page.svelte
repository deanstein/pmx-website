<script>
	import imageAttributesCollection from '../../image-attributes-collection';
	import { pageMeta, productMeta, sharedStrings } from '$lib/shared-strings';

	import { JDGContentBoxFloating, JDGContentContainer } from 'jdg-ui-svelte';
	import ProductDetailsSection from '../../../components/ProductDetailsSection.svelte';
	import ProductTypeContainer from '../../../components/ProductTypeContainer.svelte';
	import UpNext from '../../../components/UpNext.svelte';
	import { accentColors } from '$lib/shared-styles';

	// display model numbers consistently
	const model028A =
		productMeta.COASTER_028.displayCode + productMeta.COASTER_028.variants.A.displayCode;
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title={pageMeta.products.COASTER_028.title.toUpperCase()}
		titleColor={accentColors[2]}
		subtitle={productMeta.COASTER_028.tagline}
	>
		<ProductTypeContainer
			imageAttributeObjects={[
				imageAttributesCollection.products.COASTER_028A_1,
				imageAttributesCollection.products.COASTER_028A_2
			]}
		>
			<ProductDetailsSection sectionTitle={`MODEL ${model028A}`}>
				Central Denver and LoDo are featured in this relief pattern map coaster.
				<br /><br />
				Stackable and sturdy, with rubber feet for stability.
			</ProductDetailsSection>
			<ProductDetailsSection sectionTitle={sharedStrings.details}>
				Dimensions: 4.10"W x 4.10"D x 0.29"H
				<br />
				Latest version: v1.7.2
			</ProductDetailsSection>
			<ProductDetailsSection sectionTitle={sharedStrings.availability}>
				<a
					href="https://www.cgtrader.com/3d-print-models/house/kitchen-dining/drink-coaster-denver-map"
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
