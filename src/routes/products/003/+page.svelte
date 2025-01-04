<script>
	import imageAttributesCollection from '../../image-attributes-collection';
	import { pageMeta, productMeta, sharedStrings } from '$lib/shared-strings';

	import { JDGContentBoxFloating, JDGContentContainer } from 'jdg-ui-svelte';
	import ProductDetailsSection from '../../../components/ProductDetailsSection.svelte';
	import ProductTypeContainer from '../../../components/ProductTypeContainer.svelte';
	import ProductTypeSelector from '../../../components/ProductTypeSelector.svelte';
	import UpNext from '../../../components/UpNext.svelte';
	import { accentColors } from '$lib/shared-styles';

	// display model numbers consistently
	const model003D =
		productMeta.PLANTER_003.displayCode + productMeta.PLANTER_003.variants.D.displayCode;
	const model003F =
		productMeta.PLANTER_003.displayCode + productMeta.PLANTER_003.variants.F.displayCode;
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title={pageMeta.products.PLANTER_003.title.toUpperCase()}
		titleColor={accentColors[2]}
		subtitle={productMeta.PLANTER_003.tagline}
	>
		<ProductTypeSelector
			activeProductId={model003F}
			productTypeIds={[model003D, model003F]}
			productTypeThumbnailImageAttributes={[
				imageAttributesCollection.products.PLANTER_003D_1,
				imageAttributesCollection.products.PLANTER_003F_0
			]}
		>
			<ProductTypeContainer
				productId={model003D}
				imageAttributeObjects={[
					imageAttributesCollection.products.PLANTER_003D_1,
					imageAttributesCollection.products.PLANTER_003D_2,
					imageAttributesCollection.products.PLANTER_003D_3
				]}
			>
				<ProductDetailsSection sectionTitle={`MODEL ${model003D}`}>
					A blended pentagon-based form, small enough for windowsills.
					<br /><br />
					Features an overflow protection reservoir.
					<br /><br />
					Available with choice of exterior relief patterns.
				</ProductDetailsSection>
				<ProductDetailsSection sectionTitle={sharedStrings.details}>
					Dimensions: 4.71"W x 4.71"D x 3.21"H
					<br />
					Latest version: v1.10.5
				</ProductDetailsSection>
				<ProductDetailsSection sectionTitle={sharedStrings.availability}>
					<div class="icon-and-text">
						<i class={sharedStrings.downloadFaIconClass} />
						<span>{sharedStrings.downloadCGTrader}</span>
					</div>
					<div class="list-item indented" style="padding-top: 10px;">
						• <a
							href="https://www.cgtrader.com/3d-print-models/house/decor/planter-summit-variant"
							target="_blank"
							class="no-initial-highlight"
						>
							FOREST PATTERN</a
						>
					</div>
					<div class="list-item indented">
						• <a
							href="https://www.cgtrader.com/3d-print-models/house/decor/planter-summit-variant"
							target="_blank"
							class="no-initial-highlight"
						>
							MOUNTAIN PATTERN</a
						>
					</div>
					<div class="list-item indented">
						• <a
							href="https://www.cgtrader.com/3d-print-models/house/accessories/planter-stone-variant"
							target="_blank"
							class="no-initial-highlight"
						>
							ROCK PATTERN</a
						>
					</div>
				</ProductDetailsSection>
			</ProductTypeContainer>
			<ProductTypeContainer
				productId={model003F}
				imageAttributeObjects={[
					imageAttributesCollection.products.PLANTER_003F_1,
					imageAttributesCollection.products.PLANTER_003F_2,
					imageAttributesCollection.products.PLANTER_003F_3
				]}
			>
				<ProductDetailsSection sectionTitle={`MODEL ${model003F}`}>
					A simple cuboid shape, enhanced with a hidden aeration system and overflow protection
					reservoir.
					<br /><br />
					Optionally features a subtle exterior relief pattern.
					<br /><br />
					Other sizes and proportions available below.
				</ProductDetailsSection>
				<ProductDetailsSection sectionTitle={sharedStrings.details}>
					Dimensions: 4.00"W x 4.00"D x 3.69"H
					<br />
					Latest version: v1.15.4
				</ProductDetailsSection>
				<ProductDetailsSection sectionTitle={sharedStrings.availability}>
					<div class="icon-and-text">
						<i class={sharedStrings.downloadFaIconClass} />
						<span>{sharedStrings.downloadCGTrader}</span>
					</div>
					<div class="list-item indented" style="padding-top: 10px;">
						• <a
							href="https://www.cgtrader.com/3d-print-models/house/accessories/planter-cube-medium"
							target="_blank"
							class="no-initial-highlight"
						>
							{model003F} - NO PATTERN</a
						>
					</div>
					<div class="list-item indented">
						• <a
							href="https://www.cgtrader.com/3d-print-models/house/accessories/planter-medium-cuboid-pattern"
							target="_blank"
							class="no-initial-highlight"
						>
							{model003F} - WITH PATTERN</a
						>
					</div>
					<div class="list-item indented">
						• <a
							href="https://www.cgtrader.com/3d-print-models?author=parametrix&keywords=planter+cuboid"
							target="_blank"
							class="no-initial-highlight"
						>
							OTHER SIZES...</a
						>
					</div>
				</ProductDetailsSection>
			</ProductTypeContainer>
		</ProductTypeSelector>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
