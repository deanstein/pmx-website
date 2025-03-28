<script>
	// @ts-nocheck
	import { afterUpdate } from 'svelte';

	import { JDGImageTile } from 'jdg-ui-svelte';
	import { accentColors } from '$lib/shared-styles';

	export let activeProductId = productTypeIds[0]; // optional - if not set, uses the first id
	export let productTypeIds = []; // array of product IDs to show
	export let productTypeThumbnailImageAttributes = []; // array of images for product types, in same order as IDs

	let productTypeSelectorRef;

	// show or hide the appropriate product type
	const filterProductTypeDisplay = () => {
		// all top-level children, which should be ProductTypeContainer components
		const productTypeContainerElements = Array.from(productTypeSelectorRef.children);
		productTypeContainerElements.forEach((productTypeElement) => {
			if (productTypeElement.id === activeProductId) {
				productTypeElement.style.visibility = 'visible';
				productTypeElement.style.position = 'relative';
			} else {
				productTypeElement.style.visibility = 'hidden';
				productTypeElement.style.position = 'absolute';
			}
		});
	};

	const setActiveProductType = (productTypeId) => {
		activeProductId = productTypeId;
		filterProductTypeDisplay();
	};

	// determine if the URL contains a hash
	// which would indicate a specific product type is requested via the referring page
	const getProductTypeLetterFromHash = () => {
		const hash = window.location.hash;
		// hash needs to be a single letter only
		if (hash && hash.length === 2 && /^[a-zA-Z]$/.test(hash[1])) {
			return hash[1];
		}
	};

	const getProductTypeFromLetter = (letter) => {
		const matches = productTypeIds.filter((element) => element.includes(letter));
		return matches.length > 0 ? matches[0] : null;
	};

	afterUpdate(() => {
		filterProductTypeDisplay();
	});

	$: {
		// if the URL contains a hash, the referring page
		// may be trying to override the default active product type
		// so set the active product type again just in case
		if (productTypeSelectorRef && window.location.hash) {
			const productTypeLetter = getProductTypeLetterFromHash();
			let foundProductType = undefined;
			if (productTypeLetter) {
				foundProductType = getProductTypeFromLetter(productTypeLetter);
			}
			if (foundProductType) {
				setActiveProductType(foundProductType);
			}
		}
	}
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
