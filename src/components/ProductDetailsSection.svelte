<script>
	import { accentColorBar } from '$lib/shared-styles';

	export let sectionTitle = 'PRODUCT SECTION';
</script>

<div class="right-panel-section">
	<div class="right-panel-heading {accentColorBar}">{sectionTitle}</div>
	<div class="right-panel-content">
		<slot />
	</div>
</div>

<style>
	.right-panel-section {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.right-panel-heading {
		font-size: 1.25em;
		padding: 0 10px 0 10px;
	}

	.right-panel-content {
		line-height: 1.3;
		padding: 0 10px 0 10px;
	}
</style>
