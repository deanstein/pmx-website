<script>
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGImageCarousel
	} from 'jdg-ui-svelte';
	import imageAttributesCollection from '../../image-attributes-collection';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating title="DENVER CITYSCAPE" subtitle="Denver in the palm of your hands">
		<div class="pmx-product-container-flex">
			<div class="flex-container-left">
				<JDGImageCarousel
					showBlurInUnfilledSpace={false}
					imageAttributeObjects={[
						imageAttributesCollection.cityscape_021A_1,
						imageAttributesCollection.cityscape_021A_2,
						imageAttributesCollection.cityscape_021A_3,
						imageAttributesCollection.cityscape_021A_4
					]}
				/>
			</div>
			<div class="flex-container-right">
				<div class="right-panel-container">
					<div class="right-panel-section">
						<div class="right-panel-heading">MODEL 021A</div>
						<span>
							The Denver Cityscape features over 70 of Denver's most iconic buildings at 1:5280
							scale.
							<br /><br />
							Our custom algorithm approximates the building locations based on actual addresses, then
							adjusts their locations on the platform to minimize overlap and maximize visibility.
							<br /><br />
							The Cityscape model is occasionally updated as Denver's skyline changes. Check the version
							number on the bottom of the product and match it with the legend below.
						</span>
					</div>
					<div class="right-panel-section">
						<div class="right-panel-heading">DETAILS</div>
						<span>
							Dimensions: 7.00"W x 2.50"D x 1.85"H
							<br />
							Latest version: 2.2.4
						</span>
					</div>
					<div class="right-panel-section">
						<div class="right-panel-heading">LEGENDS</div>
						<span> ... </span>
					</div>
					<div class="right-panel-section">
						<div class="right-panel-heading">AVAILABILITY</div>
						<span> ... </span>
					</div>
				</div>
			</div>
		</div>
	</JDGContentBoxFloating>
</JDGContentContainer>

<style>
	.pmx-product-container-flex {
		display: flex;
		flex-direction: row;
	}

	.flex-container-left {
		flex: 1;
	}

	.flex-container-right {
		flex: 0 0 30%;
	}

	.right-panel-container {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}

	.right-panel-section {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.right-panel-heading {
		font-size: 1.25em;
		padding: 0 10px 0 10px;
		background-color: black;
		color: white;
	}
</style>
