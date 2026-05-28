<script>
	import { css } from '@emotion/css';
	import { colorMode, lightenColor } from 'jdg-ui-svelte';
	import { accentColors } from '$lib/shared-styles';

	export let sectionTitle = 'PRODUCT SECTION';

	$: accentColorBar = css`
		background-color: ${$colorMode === 'dark' ? lightenColor(accentColors[0], 0.15) : accentColors[2]};
		color: ${$colorMode === 'dark' ? accentColors[2] : 'white'};
	`;
</script>

<div class="pmx-product-detail-section">
	<div class="product-detail-heading {accentColorBar}">{sectionTitle}</div>
	<div class="product-detail-content">
		<slot />
	</div>
</div>

<style>
	.pmx-product-detail-section {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.product-detail-heading {
		font-size: 1.25em;
		padding: 0 10px 0 10px;
	}

	.product-detail-content {
		line-height: 1.3;
		padding: 0 10px 0 10px;
	}
</style>
