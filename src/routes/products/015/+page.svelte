<script>
	import { JDGContentBoxFloating, JDGContentContainer } from 'jdg-ui-svelte';

	import imageMetaRegistry from '$lib/image-meta-registry';
	import { pageMeta, productMeta, sharedStrings } from '$lib/shared-strings';
	import ProductDetailsSection from '$lib/components/ProductDetailsSection.svelte';
	import ProductTypeContainer from '$lib/components/ProductTypeContainer.svelte';
	import UpNext from '$lib/components/UpNext.svelte';

	// display model numbers consistently
	const model015C =
		productMeta.CARD_HOLDER_015.displayCode + productMeta.CARD_HOLDER_015.variants.C.displayCode;
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title={pageMeta.products.CARD_HOLDER_015.title.toUpperCase()}
		subtitle={productMeta.CARD_HOLDER_015.tagline}
	>
		<ProductTypeContainer
			imageMetaSet={[
				imageMetaRegistry.products.CARD_HOLDER_015C_1,
				imageMetaRegistry.products.CARD_HOLDER_015C_2,
				imageMetaRegistry.products.CARD_HOLDER_015C_3,
				imageMetaRegistry.products.CARD_HOLDER_015C_4,
				imageMetaRegistry.products.CARD_HOLDER_015C_5
			]}
		>
			<ProductDetailsSection sectionTitle={`MODEL ${model015C}`}>
				An elegant and flexible way to display business cards.
				<br /><br />
				Features a tier system to optionally display four sets of cards at once. Cards can be oriented
				vertically or horizontally.
				<br /><br />
				An angular relief pattern ties it all together creating a simple, striking effect.
			</ProductDetailsSection>
			<ProductDetailsSection sectionTitle={sharedStrings.details}>
				Dimensions: 1.75"W x 2.32"D x 1.45"H
				<br />
				Latest version: v1.3.2
			</ProductDetailsSection>
			<ProductDetailsSection sectionTitle={sharedStrings.availability}>
				<a
					href="https://www.cgtrader.com/3d-print-models/house/accessories/business-card-holder--5"
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
