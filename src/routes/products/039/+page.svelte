<script>
	import imageAttributesCollection from '../../image-attributes-collection';
	import { pageMeta, productMeta, sharedStrings } from '$lib/shared-strings';

	import { JDGContentBoxFloating, JDGContentContainer } from 'jdg-ui-svelte';
	import ProductDetailsSection from '../../../components/ProductDetailsSection.svelte';
	import ProductTypeContainer from '../../../components/ProductTypeContainer.svelte';
	import UpNext from '../../../components/UpNext.svelte';
	import { accentColors } from '$lib/shared-styles';

	// display model numbers consistently
	const model039A =
		productMeta.GRINDER_039.displayCode + productMeta.GRINDER_039.variants.A.displayCode;
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title={pageMeta.products.GRINDER_039.title.toUpperCase()}
		titleColor={accentColors[2]}
		subtitle={productMeta.GRINDER_039.tagline}
	>
		<ProductTypeContainer
			imageAttributeObjects={[
				imageAttributesCollection.products.GRINDER_039A_1,
				imageAttributesCollection.products.GRINDER_039A_2,
				imageAttributesCollection.products.GRINDER_039A_3
			]}
		>
			<ProductDetailsSection sectionTitle={`MODEL ${model039A}`}>
				Quickly grind and dispense herbs and other plant material.
				<br /><br />
				Never clogs thanks to an agitation system that keeps material flowing through the nozzle.
			</ProductDetailsSection>
			<ProductDetailsSection sectionTitle={sharedStrings.details}>
				Dimensions: 2.82"W x 3.33"D x 1.08"H
				<br />
				Latest version: v3.51.4
			</ProductDetailsSection>
			<ProductDetailsSection sectionTitle={sharedStrings.availability}>
				<a
					href="https://www.cgtrader.com/3d-print-models/gadgets/other/039a-self-cleaning-herb-grinder"
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
