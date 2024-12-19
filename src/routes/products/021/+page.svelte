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
					<div class="right-panel-heading">MODEL 021A</div>
					<span>
						The Denver Cityscape features over 70 of Denver's most iconic buildings at 1:5280 scale.
						<br /><br />
						Our custom algorithm approximates the building locations based on actual addresses, then
						adjusts their locations on the platform to minimize overlap and maximize visibility.
						<br /><br />
						The Cityscape model is occasionally updated as Denver's skyline changes. Check the version
						number on the bottom of the product and match it with the legend below.
					</span>
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
	}

	.right-panel-heading {
		font-size: 1.25em;
		background-color: black;
		color: white;
	}
</style>
