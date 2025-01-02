<script>
	import imageAttributesCollection from '../../image-attributes-collection';
	import { pageMeta } from '$lib/shared-strings';
    
    import { JDGContentBoxFloating, JDGContentContainer } from 'jdg-ui-svelte';
    import ProductDetailsSection from '../../../components/ProductDetailsSection.svelte';
    import ProductTypeContainer from '../../../components/ProductTypeContainer.svelte';
	import UpNext from '../../../components/UpNext.svelte';
    import { accentColors } from '$lib/shared-styles';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title={pageMeta.products.PLANTER_003.title.toUpperCase()}
		titleColor={accentColors[2]}
		subtitle="Give plants what they want"
	>
		<ProductTypeContainer
			imageAttributeObjects={[
				imageAttributesCollection.products.DECOR_030A_1,
				imageAttributesCollection.products.DECOR_030A_2,
				imageAttributesCollection.products.DECOR_030A_3
			]}
		>
			<ProductDetailsSection sectionTitle="MODEL 003F">
				A simple cuboid shape, enhanced with a hidden aeration system and overflow protection reservoir.
				<br /><br />
				Optionally features a subtle exterior relief pattern.
                <br><br>
                Other sizes and proportions available below.
			</ProductDetailsSection>
			<ProductDetailsSection sectionTitle="DETAILS">
				Dimensions: 4.00"W x 4.00"D x 3.69"H
				<br />
				Latest version: v1.15.4
			</ProductDetailsSection>
			<ProductDetailsSection sectionTitle="AVAILABILITY">
				<a
					href="https://www.cgtrader.com/3d-print-models/house/decor/030a-decorative-sphere-puzzle"
					target="_blank"
					class="no-initial-highlight"
				>
					<div class="icon-and-text">
						<i class="fa-solid fa-caret-down" />
						<span>DOWNLOAD FROM CGTRADER</span>
					</div>
				</a>
			</ProductDetailsSection>
		</ProductTypeContainer>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
