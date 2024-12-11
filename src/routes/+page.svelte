<script>
	import { jdgSharedUrls } from 'jdg-ui-svelte/jdg-shared-strings.js';
	import { pageMeta, sharedStyles } from '$lib/shared-strings';
	import imageAttributesCollection from './image-attributes-collection';
	import { windowWidth } from 'jdg-ui-svelte/states/ui-state.js';
	import { breakpointHandler } from 'jdg-ui-svelte/jdg-ui-management.js';

	import {
		JDGBodyCopy,
		JDGClipFade,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGGridLayout,
		JDGH3H4,
		JDGImage,
		JDGImageFullWidth,
		JDGImageTile,
		JDGJumpTo
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
		imageAttributes={imageAttributesCollection.arch.fairgrounds_river}
		overlayColorRgba={sharedStyles.overlayColorDarkRgba}
		superText={`Hi! 👋 I'm Josh.`}
		primaryText={"I'm a 3D creator"}
		primaryTextBold
		secondaryText={'with experience in:'}
	/>
</JDGContentContainer>
<JDGContentContainer paddingTop="0">
	<JDGContentBoxFloating title={'INDUSTRIAL DESIGN'}>
		<JDGBodyCopy textAlign="center" paddingTop="0" textWrap="balance">
			My passion for design extends naturally beyond buildings to the products, furniture, and
			humans that inhabit them.
		</JDGBodyCopy>
		<JDGH3H4 h3String="PARAMETRIX3D" h4String="Generative 3D-printed products" />
		<JDGBodyCopy textAlign="center" paddingTop="0">
			Harnessing skills from my architecture career, I use <a
				href={jdgSharedUrls.grasshopper}
				target="_blank">visual scripting</a
			>
			and 3D printing to design, test, and refine useful products for the home under the label
			<a href="http://www.parametrix3d.com/" target="_blank">Parametrix3D</a>.
			<br /><br />
			Select designs were sold physically at the
			<a href="https://iheartdenverstore.com/" target="_blank">I Heart Denver</a>
			store from 2014 to 2017, with over 600 products sold. If you have a 3D printer, you can get these
			printer-ready models at
			<a href="https://www.cgtrader.com/3d-models?author=parametrix" target="_blank">CGTrader</a>.
		</JDGBodyCopy>
		<JDGClipFade>
			<JDGGridLayout>
				<JDGImageTile
					label={'DENVER CITYSCAPE'}
					imageAttributes={imageAttributesCollection.ind.cityscape_021A_0}
					href="http://www.parametrix3d.com/021.html"
					hrefOpenInNewTab={true}
				/>
				<JDGImageTile
					label={'PUZZLE DECOR'}
					imageAttributes={imageAttributesCollection.ind.puzzle_decor_030A_0}
					href="http://www.parametrix3d.com/030.html"
					hrefOpenInNewTab={true}
				/>
				<JDGImageTile
					label={'ADVANCED PLANTER'}
					imageAttributes={imageAttributesCollection.ind.planter_003F_0}
					href="http://www.parametrix3d.com/003.html"
					hrefOpenInNewTab={true}
				/>
				<JDGImageTile
					label={'PEN HOLDER'}
					imageAttributes={imageAttributesCollection.ind.pen_holder_008I_0}
					href="http://www.parametrix3d.com/008.html"
					hrefOpenInNewTab={true}
				/>
				<JDGImageTile
					label={'CARD HOLDER'}
					imageAttributes={imageAttributesCollection.ind.card_holder_015C_0}
					href="http://www.parametrix3d.com/015.html"
					hrefOpenInNewTab={true}
				/>
				<JDGImageTile
					label={'DEN / CO MAGNETS'}
					imageAttributes={imageAttributesCollection.ind.den_co_magnets_047BC_0}
					href="http://www.parametrix3d.com/047.html"
					hrefOpenInNewTab={true}
				/>
				<JDGImageTile
					label={'CO TOPO MAGNET'}
					imageAttributes={imageAttributesCollection.ind.co_topo_magnet_047D_0}
					href="http://www.parametrix3d.com/047d.html"
					hrefOpenInNewTab={true}
				/>
				<JDGImageTile
					label={'HERB GRINDER'}
					imageAttributes={imageAttributesCollection.ind.grinder_039A_0}
					href="http://www.parametrix3d.com/039.html"
					hrefOpenInNewTab={true}
				/>
				<JDGImageTile
					label={'DENVER MAP COASTER'}
					imageAttributes={imageAttributesCollection.ind.coaster_028A_0}
					href="http://www.parametrix3d.com/028.html"
					hrefOpenInNewTab={true}
				/>
				<JDGImageTile
					label={'KITCHEN CADDY'}
					imageAttributes={imageAttributesCollection.ind.kitchen_caddy_007F_0}
					href="http://www.parametrix3d.com/007.html"
					hrefOpenInNewTab={true}
				/>
			</JDGGridLayout>
		</JDGClipFade>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>
