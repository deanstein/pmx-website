<script>
	// @ts-nocheck
	import { afterUpdate } from 'svelte';

	import { JDGImageTile } from 'jdg-ui-svelte';
	import { accentColors } from '$lib/shared-styles';

	export let activeProductId = productTypeIds[0]; // optional - if not set, uses the first id
	export let productTypeIds = []; // array of product IDs to show
	export let productTypeThumbnailImageAttributes = []; // array of images for product types, in same order as IDs

	let productTypeSelectorRef;

	const setActiveProductType = (productTypeId) => {
		activeProductId = productTypeId;
	};

	// show or hide the appropriate product type
	afterUpdate(() => {
		// all top-level children, which should be ProductTypeContainer components
		const productTypeContainerElements = Array.from(productTypeSelectorRef.children);
		productTypeContainerElements.forEach((productTypeElement) => {
			if (productTypeElement.id === activeProductId) {
				productTypeElement.style.display = '';
			} else {
				productTypeElement.style.display = 'none';
			}
		});
	});
</script>

<div class="pmx-product-type-selector-container">
	<!-- type selector thumbnails -->
	<div class="product-type-thumbnail-and-title-container">
		<div class="product-type-title">Available models:</div>
		<div class="product-type-thumbnail-container">
			{#each productTypeThumbnailImageAttributes as imageAttributesObject, i}
				<div class="thumbnail-and-label">
					<div
						class="active-thumbnail-wrapper"
						style={productTypeIds[i] === activeProductId
							? `outline: 5px solid ${accentColors[2]}`
							: ''}
					>
						<JDGImageTile
							onClickFunction={() => {
								setActiveProductType(productTypeIds[i]);
							}}
							imageAttributes={imageAttributesObject}
							maxHeight="80px"
							maxWidth="125px"
							useCompactHeightOnMobile={false}
							recordAspectRatioInState
						/>
					</div>
					<div class="thumbnail-label">
						{productTypeIds[i]}
					</div>
				</div>
			{/each}
		</div>
	</div>
	<!-- actual product type display -->
	<div bind:this={productTypeSelectorRef} class="product-type-selector">
		<slot />
	</div>
</div>

<style>
	.pmx-product-type-selector-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 50px;
	}

	.product-type-thumbnail-and-title-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.product-type-title {
		text-align: center;
	}

	.product-type-thumbnail-container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
		padding: 0.75rem;
		box-sizing: border-box;
	}

	.active-thumbnail-wrapper {
		position: relative;
	}

	.thumbnail-and-label {
		display: flex;
		flex-direction: column;
	}

	.thumbnail-label {
		font-weight: bold;
		text-align: center;
		padding-top: 10px;
	}
</style>
