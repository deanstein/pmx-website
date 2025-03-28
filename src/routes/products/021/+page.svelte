<script>
	import imageAttributesCollection from '../../image-attributes-collection';
	import { pageMeta, productMeta, sharedStrings } from '$lib/shared-strings';

	import { JDGContentBoxFloating, JDGContentContainer } from 'jdg-ui-svelte';
	import ProductDetailsSection from '../../../components/ProductDetailsSection.svelte';
	import ProductTypeContainer from '../../../components/ProductTypeContainer.svelte';
	import UpNext from '../../../components/UpNext.svelte';
	import { accentColors } from '$lib/shared-styles';

	// display model numbers consistently
	const model021A =
		productMeta.CITYSCAPE_021.displayCode + productMeta.CITYSCAPE_021.variants.A.displayCode;
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title={pageMeta.products.CITYSCAPE_021.title.toUpperCase()}
		titleColor={accentColors[2]}
		subtitle={productMeta.CITYSCAPE_021.tagline}
	>
		<ProductTypeContainer
			imageAttributeObjects={[
				imageAttributesCollection.products.CITYSCAPE_021A_1,
				imageAttributesCollection.products.CITYSCAPE_021A_2,
				imageAttributesCollection.products.CITYSCAPE_021A_3,
				imageAttributesCollection.products.CITYSCAPE_021A_4
			]}
		>
			<ProductDetailsSection sectionTitle={`MODEL ${model021A}`}>
				The Denver Cityscape features over 70 of Denver's most iconic buildings at 1:5280 scale.
				<br /><br />
				Our custom algorithm approximates the building locations based on actual addresses, then adjusts
				their locations on the platform to minimize overlap and maximize visibility.
				<br /><br />
				The Cityscape model is occasionally updated as Denver's skyline changes. Check the version number
				on the bottom of the product and match it with the legend below.
			</ProductDetailsSection>
			<ProductDetailsSection sectionTitle={sharedStrings.details}>
				Dimensions: 7.00"W x 2.50"D x 1.85"H
				<br />
				Latest version: v2.2.4
			</ProductDetailsSection>
			<ProductDetailsSection sectionTitle="LEGENDS">
				<div class="list-item">
					<a
						href="https://res.cloudinary.com/jdg-main/image/upload/v1736910582/pmx-website/products/021-legends/20140921v1.03-1.04_denver_cityscape_legend.pdf"
						target="_blank"
						class="no-initial-highlight">Version 1.3.x or 1.4.x</a
					>
				</div>
				<div class="list-item">
					<a
						href="https://res.cloudinary.com/jdg-main/image/upload/v1736910581/pmx-website/products/021-legends/20150204v1.05-1.10_denver_cityscape_legend.pdf"
						target="_blank"
						class="no-initial-highlight">Version 1.5.x or 1.10.x</a
					>
				</div>
				<div class="list-item">
					<a
						href="https://res.cloudinary.com/jdg-main/image/upload/v1736910581/pmx-website/products/021-legends/20150402v1.11-1.12_denver_cityscape_legend.pdf"
						target="_blank"
						class="no-initial-highlight">Version 1.11.x or 1.12.x</a
					>
				</div>
				<div class="list-item">
					<a
						href="https://res.cloudinary.com/jdg-main/image/upload/v1736910581/pmx-website/products/021-legends/20151229v1.13_denver_cityscape_legend.pdf"
						target="_blank"
						class="no-initial-highlight">Version 1.13.x</a
					>
				</div>
				<div class="list-item">
					<a
						href="https://res.cloudinary.com/jdg-main/image/upload/v1736910582/pmx-website/products/021-legends/20160213v2.01_denver_cityscape_legend.pdf"
						target="_blank"
						class="no-initial-highlight">Version 2.1.x</a
					>
				</div>
				<div class="list-item">
					<a
						href="https://res.cloudinary.com/jdg-main/image/upload/v1736910582/pmx-website/products/021-legends/20161031v2.02_denver_cityscape_legend.pdf"
						target="_blank"
						class="no-initial-highlight">Version 2.2.x</a
					>
				</div>
			</ProductDetailsSection>
			<ProductDetailsSection sectionTitle={sharedStrings.availability}>
				<a
					href="https://www.cgtrader.com/3d-print-models/house/other/denver-cityscape"
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
