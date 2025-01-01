<script>
	import { jdgSharedUrls } from 'jdg-ui-svelte/jdg-shared-strings.js';
	import { pageMeta, sharedStyles } from '$lib/shared-strings';
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
		imageAttributes={imageAttributesCollection.grinder_039A_0}
		overlayColorRgba={sharedStyles.overlayColorDarkRgba}
		primaryText="PARAMETRIX3D"
		secondaryText={'HUMAN DESIGNED &nbsp&nbsp |  &nbsp&nbsp CODE GENERATED  &nbsp&nbsp |  &nbsp&nbsp MACHINE PRINTED'}
		primaryTextBold
	/>
</JDGContentContainer>
<JDGContentContainer paddingTop="0">
	<JDGContentBoxFloating animateWhenVisible={false}>
		<JDGGridLayout>
			<JDGImageTile
				label={pageMeta.products.CITYSCAPE_021.title.toUpperCase()}
				imageAttributes={imageAttributesCollection.cityscape_021A_0}
				href={pageMeta.products.CITYSCAPE_021.href}
			/>
			<JDGImageTile
				label={pageMeta.products.PUZZLE_030.title.toUpperCase()}
				imageAttributes={imageAttributesCollection.puzzle_decor_030A_0}
				href={pageMeta.products.PUZZLE_030.href}
			/>
			<JDGImageTile
				label={'ADVANCED PLANTER'}
				imageAttributes={imageAttributesCollection.planter_003F_0}
				href="http://www.parametrix3d.com/003.html"
			/>
			<JDGImageTile
				label={'PEN HOLDER'}
				imageAttributes={imageAttributesCollection.pen_holder_008I_0}
				href="http://www.parametrix3d.com/008.html"
			/>
			<JDGImageTile
				label={'CARD HOLDER'}
				imageAttributes={imageAttributesCollection.card_holder_015C_0}
				href="http://www.parametrix3d.com/015.html"
			/>
			<JDGImageTile
				label={'DEN / CO MAGNETS'}
				imageAttributes={imageAttributesCollection.den_co_magnets_047BC_0}
				href="http://www.parametrix3d.com/047.html"
			/>
			<JDGImageTile
				label={'CO TOPO MAGNET'}
				imageAttributes={imageAttributesCollection.co_topo_magnet_047D_0}
				href="http://www.parametrix3d.com/047d.html"
			/>
			<JDGImageTile
				label={'HERB GRINDER'}
				imageAttributes={imageAttributesCollection.grinder_039A_0}
				href="http://www.parametrix3d.com/039.html"
			/>
			<JDGImageTile
				label={'DENVER MAP COASTER'}
				imageAttributes={imageAttributesCollection.coaster_028A_0}
				href="http://www.parametrix3d.com/028.html"
			/>
			<JDGImageTile
				label={'KITCHEN CADDY'}
				imageAttributes={imageAttributesCollection.kitchen_caddy_007F_0}
				href="http://www.parametrix3d.com/007.html"
			/>
		</JDGGridLayout>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
