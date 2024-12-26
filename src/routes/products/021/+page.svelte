<script>
	import { JDGContentBoxFloating, JDGContentContainer, JDGImageCarousel } from 'jdg-ui-svelte';
	import imageAttributesCollection from '../../image-attributes-collection';
	import { accentColors } from '$lib/shared-styles';
	import ProductDetailsSection from '../../../components/ProductDetailsSection.svelte';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title="DENVER CITYSCAPE"
		titleColor={accentColors[2]}
		subtitle="Denver in the palm of your hands"
	>
		<div class="pmx-product-container-flex">
			<div class="flex-container-left">
				<JDGImageCarousel
					imageAttributeObjects={[
						imageAttributesCollection.cityscape_021A_1,
						imageAttributesCollection.cityscape_021A_2,
						imageAttributesCollection.cityscape_021A_3,
						imageAttributesCollection.cityscape_021A_4
					]}
					showCaption={false}
					showAttribution={false}
					showBlurInUnfilledSpace={false}
                    justifyContent='right'
				/>
			</div>
			<div class="flex-container-right">
				<div class="right-panel-container">
					<ProductDetailsSection sectionTitle="MODEL 021">
						The Denver Cityscape features over 70 of Denver's most iconic buildings at 1:5280 scale.
						<br /><br />
						Our custom algorithm approximates the building locations based on actual addresses, then
						adjusts their locations on the platform to minimize overlap and maximize visibility.
						<br /><br />
						The Cityscape model is occasionally updated as Denver's skyline changes. Check the version
						number on the bottom of the product and match it with the legend below.
					</ProductDetailsSection>
					<ProductDetailsSection sectionTitle="DETAILS">
						Dimensions: 7.00"W x 2.50"D x 1.85"H
						<br />
						Latest version: 2.2.4
					</ProductDetailsSection>
					<ProductDetailsSection sectionTitle="LEGENDS">
						Version 1.3.x or 1.4.x
						<br />
						Version 1.5.x or 1.10.x
						<br />
						Version 1.11.x or 1.12.x
						<br />
						Version 1.13.x
						<br />
						Version 2.1.x
						<br />
						Version 2.2.x
					</ProductDetailsSection>
					<ProductDetailsSection sectionTitle="AVAILABILITY">
                        <a href="https://www.cgtrader.com/3d-print-models/house/other/denver-cityscape" target="_blank" class="no-initial-highlight">
						<div class="icon-and-text">
							<i class="fa-solid fa-caret-down" />
							<span>DOWNLOAD FROM CGTRADER</span>
						</div>
                        </a>
					</ProductDetailsSection>
				</div>
			</div>
		</div></JDGContentBoxFloating
	>
</JDGContentContainer>

<style>
	.pmx-product-container-flex {
		display: flex;
		flex-direction: row;
        justify-content: center;
        gap: 20px;
	}

	.flex-container-left {
		display: flex;
		justify-content: right;
	}

	.flex-container-right {
		flex: 0 0 30%;
	}

	.right-panel-container {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}

	.icon-and-text {
		display: flex;
		gap: 5px;
	}
</style>
