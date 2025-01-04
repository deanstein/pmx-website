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
	const model047B =
		productMeta.MAGNET_047.displayCode + productMeta.MAGNET_047.variants.B.displayCode;
	const model047C =
		productMeta.MAGNET_047.displayCode + productMeta.MAGNET_047.variants.C.displayCode;
	const model047D =
		productMeta.MAGNET_047.displayCode + productMeta.MAGNET_047.variants.D.displayCode;
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title={pageMeta.products.MAGNET_047.title.toUpperCase()}
		titleColor={accentColors[2]}
		subtitle={productMeta.MAGNET_047.tagline}
	>
		<ProductTypeSelector
			activeProductId={model047B}
			productTypeIds={[model047B, model047C, model047D]}
			productTypeThumbnailImageAttributes={[
				imageAttributesCollection.products.MAGNET_CO_047B_1,
				imageAttributesCollection.products.MAGNET_DEN_047C_1,
				imageAttributesCollection.products.MAGNET_CO_TOPO_047D_1
			]}
		>
			<ProductTypeContainer
				productId={model047B}
				imageAttributeObjects={[
					imageAttributesCollection.products.MAGNET_CO_047B_1,
					imageAttributesCollection.products.MAGNET_DEN_CO_047BC_0
				]}
			>
				<ProductDetailsSection sectionTitle={`MODEL ${model047B}`}>
					A simple decorative magnet featuring an abstraction of Colorado's Rocky Mountains as seen
					through topographic lines and silhouetted peaks.
				</ProductDetailsSection>
				<ProductDetailsSection sectionTitle={sharedStrings.details}>
					Dimensions: 1.75"W x 1.75"D x 0.21"H
					<br />
					Latest version: v1.4.2
				</ProductDetailsSection>
				<ProductDetailsSection sectionTitle={sharedStrings.availability}>
					<a
						href="https://www.cgtrader.com/3d-print-models/house/decor/colorado-abstract-topo-magnet"
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
			<ProductTypeContainer
				productId={model047C}
				imageAttributeObjects={[
					imageAttributesCollection.products.MAGNET_DEN_047C_1,
					imageAttributesCollection.products.MAGNET_DEN_CO_047BC_0
				]}
			>
				<ProductDetailsSection sectionTitle={`MODEL ${model047C}`}>
					A simple decorative magnet featuring Denver's skyline in 2.5-dimensional relief against a
					dynamic sky.
				</ProductDetailsSection>
				<ProductDetailsSection sectionTitle={sharedStrings.details}>
					Dimensions: 1.75"W x 1.75"D x 0.24"H
					<br />
					Latest version: v1.1.1
				</ProductDetailsSection>
				<ProductDetailsSection sectionTitle={sharedStrings.availability}>
					<a
						href="https://www.cgtrader.com/3d-print-models/house/decor/denver-cityscapt-magnet"
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
			<ProductTypeContainer
				productId={model047D}
				imageAttributeObjects={[
					imageAttributesCollection.products.MAGNET_CO_TOPO_047D_1,
					imageAttributesCollection.products.MAGNET_CO_TOPO_047D_2
				]}
			>
				<ProductDetailsSection sectionTitle={`MODEL ${model047D}`}>
					From the purple mountain majesty to the amber waves of grain, experience the entire gamut
					of the Colorado landscape with this highly-detailed magnet.
				</ProductDetailsSection>
				<ProductDetailsSection sectionTitle={sharedStrings.details}>
					Dimensions: 3.50"W x 0.38"D x 2.94"H
					<br />
					Latest version: v1.2.2
				</ProductDetailsSection>
				<ProductDetailsSection sectionTitle={sharedStrings.availability}>
					<a
						href="https://www.cgtrader.com/3d-print-models/house/decor/047d-magnet-colorado-topography"
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
		</ProductTypeSelector>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
