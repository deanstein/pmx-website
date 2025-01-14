<script>
	export let productCode = '000';
</script>

<div class="pmx-product-code-label-container">
	<div class="product-code-label">
		#{productCode}
	</div>
</div>

<style>
	.pmx-product-code-label-container {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 0 0 12px;
	}

	.product-code-label {
		font-family: 'REM';
		font-style: italic;
		font-weight: 100;
		color: #565656ff;
	}
</style>
