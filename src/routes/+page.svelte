<script>
	import { pageMeta, productMeta, sharedStyles } from '$lib/shared-strings';
	import imageAttributesCollection from './image-attributes-collection';
	import { windowWidth } from 'jdg-ui-svelte/states/ui-state.js';
	import { breakpointHandler } from 'jdg-ui-svelte/jdg-ui-management.js';

	import {
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGGridLayout,
		JDGImageFullWidth,
		JDGImageTile
	} from 'jdg-ui-svelte';
	import UpNext from '../components/UpNext.svelte';

	const imageHeightLg = 350;
	const imageHeightSm = 250;
	let currentImageHeight = 0;

	const imageHeightBreakpointHandler = () => {
		breakpointHandler(
			// breakpoint 0
			() => {
				// force the mobile nav on
				currentImageHeight = imageHeightSm;
			},
			// breakpoint 1
			() => {
				currentImageHeight = imageHeightSm;
			},
			// breakpoint 2
			() => {
				currentImageHeight = imageHeightLg;
			}
		);
	};

	$: {
		$windowWidth;
		imageHeightBreakpointHandler();
	}
</script>

<JDGContentContainer overlapWithHeader={true} paddingTop="0" paddingBottom="0">
	<JDGImageFullWidth
		imageAttributes={imageAttributesCollection.products.GRINDER_039A_0}
		overlayColorRgba={sharedStyles.overlayColorDarkRgba}
		primaryText="PARAMETRIX3D"
		secondaryText={'HUMAN DESIGNED &nbsp&nbsp |  &nbsp&nbsp CODE GENERATED  &nbsp&nbsp |  &nbsp&nbsp MACHINE PRINTED'}
		primaryTextBold
		overlapWithHeader
	/>
</JDGContentContainer>
<JDGContentContainer paddingTop="0">
	<JDGContentBoxFloating animateWhenVisible={false}>
		<JDGGridLayout>
			<JDGImageTile
				label={pageMeta.products.CITYSCAPE_021.title.toUpperCase()}
				imageAttributes={imageAttributesCollection.products.CITYSCAPE_021A_0}
				href={pageMeta.products.CITYSCAPE_021.href}
			/>
			<JDGImageTile
				label={pageMeta.products.DECOR_030.title.toUpperCase()}
				imageAttributes={imageAttributesCollection.products.DECOR_030A_0}
				href={pageMeta.products.DECOR_030.href}
				objectPosition="left"
			/>
			<JDGImageTile
				label={pageMeta.products.PLANTER_003.title.toUpperCase()}
				imageAttributes={imageAttributesCollection.products.PLANTER_003F_0}
				href={pageMeta.products.PLANTER_003.href}
				objectPosition="left top"
			/>
			<JDGImageTile
				label={pageMeta.products.PEN_HOLDER_008.title.toUpperCase()}
				imageAttributes={imageAttributesCollection.products.PEN_HOLDER_008I_0}
				href={pageMeta.products.PEN_HOLDER_008.href}
			/>
			<JDGImageTile
				label={pageMeta.products.CARD_HOLDER_015.title.toUpperCase()}
				imageAttributes={imageAttributesCollection.products.CARD_HOLDER_015C_0}
				href={pageMeta.products.CARD_HOLDER_015.href}
				objectPosition="left top"
			/>
			<JDGImageTile
				label={productMeta.MAGNET_047.variants.B.name.toUpperCase()}
				imageAttributes={imageAttributesCollection.products.MAGNET_DEN_CO_047BC_0}
				href={pageMeta.products.MAGNET_047.href}
				objectPosition="top"
			/>
			<JDGImageTile
				label={productMeta.MAGNET_047.variants.D.name.toUpperCase()}
				imageAttributes={imageAttributesCollection.products.MAGNET_CO_TOPO_047D_0}
				href={pageMeta.products.MAGNET_047.href +
					'#' +
					productMeta.MAGNET_047.variants.D.displayCode}
				objectPosition="left bottom"
			/>
			<JDGImageTile
				label={productMeta.GRINDER_039.name.toUpperCase()}
				imageAttributes={imageAttributesCollection.products.GRINDER_039A_0}
				href={pageMeta.products.GRINDER_039.href}
			/>
			<JDGImageTile
				label={productMeta.COASTER_028.name.toUpperCase()}
				imageAttributes={imageAttributesCollection.products.COASTER_028A_0}
				href={pageMeta.products.COASTER_028.href}
			/>
			<JDGImageTile
				label={productMeta.KITCHEN_CADDY_007.name.toUpperCase()}
				imageAttributes={imageAttributesCollection.products.KITCHEN_CADDY_007F_0}
				href={pageMeta.products.KITCHEN_CADDY_007.href}
				objectPosition="left bottom"
			/>
		</JDGGridLayout>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
