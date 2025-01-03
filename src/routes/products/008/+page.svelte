<script>
	import imageAttributesCollection from '../../image-attributes-collection';
	import { pageMeta, sharedStrings } from '$lib/shared-strings';

	import { JDGContentBoxFloating, JDGContentContainer } from 'jdg-ui-svelte';
	import ProductDetailsSection from '../../../components/ProductDetailsSection.svelte';
	import ProductTypeContainer from '../../../components/ProductTypeContainer.svelte';
	import ProductTypeSelector from '../../../components/ProductTypeSelector.svelte';
	import UpNext from '../../../components/UpNext.svelte';
	import { accentColors } from '$lib/shared-styles';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title={pageMeta.products.PEN_HOLDER_008.title.toUpperCase()}
		titleColor={accentColors[2]}
		subtitle="Pens always within reach"
	>
		<ProductTypeSelector
			activeProductId="008I"
			productTypeIds={['008A', '008F', '008I']}
			productTypeThumbnailImageAttributes={[
				imageAttributesCollection.products.PEN_HOLDER_008A_1,
				imageAttributesCollection.products.PEN_HOLDER_008F_1,
				imageAttributesCollection.products.PEN_HOLDER_008I_1
			]}
		>
			<ProductTypeContainer
				productId="008A"
				imageAttributeObjects={[
					imageAttributesCollection.products.PEN_HOLDER_008A_1,
					imageAttributesCollection.products.PEN_HOLDER_008A_2
				]}
			>
				<ProductDetailsSection sectionTitle="MODEL 008A">
					A beautiful addition to any desk, this pen holder features classic faceted geometry.
					<br /><br />
					Designed to fan out your selection of pens and pencils for easy reach. Holds 10 of your favorite
					drawing utensils.
				</ProductDetailsSection>
				<ProductDetailsSection sectionTitle={sharedStrings.details}>
					Dimensions: 2.91"W x 2.91"D x 4.25"H
					<br />
					Latest version: v1.10.2
				</ProductDetailsSection>
				<ProductDetailsSection sectionTitle={sharedStrings.availability}>
					<a
						href="https://www.cgtrader.com/3d-print-models/house/accessories/pen-holder-faceted-variant"
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
				productId="008F"
				imageAttributeObjects={[
					imageAttributesCollection.products.PEN_HOLDER_008F_1,
					imageAttributesCollection.products.PEN_HOLDER_008F_2
				]}
			>
				<ProductDetailsSection sectionTitle="MODEL 008F">
					A variation on Model 008a, this pen holder features a dynamic wireframe pattern.
					<br /><br />
					Designed to fan out your selection of pens and pencils for easy reach. Holds 10 of your favorite
					drawing utensils.
				</ProductDetailsSection>
				<ProductDetailsSection sectionTitle={sharedStrings.details}>
					Dimensions: 2.99"W x 2.99"D x 4.20"H
					<br />
					Latest version: v1.6.2
				</ProductDetailsSection>
				<ProductDetailsSection sectionTitle={sharedStrings.availability}>
					<a
						href="https://www.cgtrader.com/3d-print-models/house/accessories/pen-holder-wireframe-variant"
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
				productId="008I"
				imageAttributeObjects={[imageAttributesCollection.products.PEN_HOLDER_008I_1]}
			>
				<ProductDetailsSection sectionTitle="MODEL 008I">
					Simple, elegant geometry makes this a classic desk piece.
					<br /><br />
					Designed to fan out your selection of pens and pencils for easy reach. Holds 10 of your favorite
					drawing utensils.
				</ProductDetailsSection>
				<ProductDetailsSection sectionTitle={sharedStrings.details}>
					Dimensions: 2.75"W x 2.75"D x 4.10"H
					<br />
					Latest version: v1.0.1
				</ProductDetailsSection>
				<ProductDetailsSection sectionTitle={sharedStrings.availability}>
					<a
						href="https://www.cgtrader.com/3d-print-models/house/other/pen-holder-simple-faceted"
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
