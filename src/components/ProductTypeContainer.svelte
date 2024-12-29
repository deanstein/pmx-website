<script>
	import { JDGImageCarousel } from 'jdg-ui-svelte';
	import imageAttributesCollection from '../routes/image-attributes-collection';
	import { accentColors } from '$lib/shared-styles';

	export let imageAttributeObjects = [
		imageAttributesCollection.cityscape_021A_1,
		imageAttributesCollection.cityscape_021A_2,
		imageAttributesCollection.cityscape_021A_3,
		imageAttributesCollection.cityscape_021A_4
	];
</script>

<!-- product detail contains an image carousel and a series of product detail sections -->
<div class="pmx-product-type-flex-container">
	<div class="flex-container-left">
		<JDGImageCarousel
			{imageAttributeObjects}
			showCaption={false}
			showAttribution={false}
			showBlurInUnfilledSpace={false}
			justifyContent="right"
			activeThumbnailColor={accentColors[2]}
		/>
	</div>
	<div class="flex-container-right">
		<div class="right-panel-container">
			<!-- any required ProductDetailsSections go here -->
			<!-- for example, product name, description, availability -->
			<slot />
		</div>
	</div>
</div>

<style>
	.pmx-product-type-flex-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 20px;
	}

	.flex-container-left {
		display: flex;
		justify-content: right;
		align-items: baseline;
	}

	.flex-container-right {
		flex: 0 0 30%;
	}

	.right-panel-container {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
</style>
