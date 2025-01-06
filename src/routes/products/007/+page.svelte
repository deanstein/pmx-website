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
	const model007F =
		productMeta.KITCHEN_CADDY_007.displayCode +
		productMeta.KITCHEN_CADDY_007.variants.F.displayCode;
	const model007G =
		productMeta.KITCHEN_CADDY_007.displayCode +
		productMeta.KITCHEN_CADDY_007.variants.G.displayCode;
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title={pageMeta.products.KITCHEN_CADDY_007.title.toUpperCase()}
		titleColor={accentColors[2]}
		subtitle={productMeta.KITCHEN_CADDY_007.tagline}
	>
		<ProductTypeSelector
			activeProductId={model007F}
			productTypeIds={[model007F, model007G]}
			productTypeThumbnailImageAttributes={[
				imageAttributesCollection.products.KITCHEN_CADDY_007F_1,
				imageAttributesCollection.products.KITCHEN_CADDY_007G_1
			]}
		>
			<ProductTypeContainer
				productId={model007F}
				imageAttributeObjects={[
					imageAttributesCollection.products.KITCHEN_CADDY_007F_2,
					imageAttributesCollection.products.KITCHEN_CADDY_007F_1
				]}
			>
				<ProductDetailsSection sectionTitle={`MODEL ${model007F}`}>
					Simple geometries work together to create strong visuals and high functionality.
					<br /><br />
					The angular lines of the walls and counter interface encourage airflow and drainage.
				</ProductDetailsSection>
				<ProductDetailsSection sectionTitle={sharedStrings.details}>
					Dimensions: 6.00"W x 1.78"D x 2.39"H
					<br />
					Latest version: v1.2.1
				</ProductDetailsSection>
				<ProductDetailsSection sectionTitle={sharedStrings.availability}>
					<a
						href="https://www.cgtrader.com/3d-print-models/house/kitchen-dining/kitchen-holder"
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
				productId={model007G}
				imageAttributeObjects={[
					imageAttributesCollection.products.KITCHEN_CADDY_007G_1,
					imageAttributesCollection.products.KITCHEN_CADDY_007G_2
				]}
			>
				<ProductDetailsSection sectionTitle={`MODEL ${model007G}`}>
					Based on {model007F}, this customized version is larger and designed to hang from a
					flush-mount sink.
					<br /><br />
					Also features a slot for hanging a brush. Designed by special request.
				</ProductDetailsSection>
				<ProductDetailsSection sectionTitle={sharedStrings.details}>
					Dimensions: 7.00"W x 5.16"D x 2.90"H
					<br />
					Latest version: v1.3.0
				</ProductDetailsSection>
				<ProductDetailsSection sectionTitle={sharedStrings.availability}>
					<a
						href="https://www.cgtrader.com/3d-print-models/house/kitchen-dining/sponge-holder-side-mount-angular-pattern"
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
