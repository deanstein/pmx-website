<script>
	import { page } from '$app/stores';
	import { MetaTags } from 'svelte-meta-tags';
	import extend from 'just-extend';

	import jdgNavItem from 'jdg-ui-svelte/schemas/jdg-nav-item.js';
	import { addCloudinaryUrlTransformation, instantiateObject } from 'jdg-ui-svelte/jdg-utils.js';
	import { pmx3dWebsiteRepoName } from 'jdg-ui-svelte/jdg-persistence-management.js';

	import { JDGAppContainer, JDGBackground, JDGFooter, JDGHeader } from 'jdg-ui-svelte';
	import { pageMeta, sharedUrls } from '$lib/shared-strings';
	import { accentColorBar, accentColors } from '$lib/shared-styles';

	// META TAGS
	// will be be sourced from +layout.js first,
	// then optionally +page.js as overrides via $page
	export let data; // meta tag data from $page
	/** @type {Object.<string, any>} */
	let metaTags;
	$: {
		metaTags = extend(true, {}, data.baseMetaTags, $page.data.pageMetaTags);
		// make the title template simply the website title
		// if the page title is the same as the website title
		if (metaTags.title === pageMeta.home.title) {
			metaTags.titleTemplate = pageMeta.home.title;
		} else {
			metaTags.titleTemplate = pageMeta.titleTemplate;
		}
	}

	// define the nav items in the header
	const newNavItem1 = instantiateObject(jdgNavItem);
	newNavItem1.label = 'HOME';
	newNavItem1.href = '/';

	const newNavItem2 = instantiateObject(jdgNavItem);
	newNavItem2.label = 'ABOUT';
	newNavItem2.href = '/about';

	const newNavItem3 = instantiateObject(jdgNavItem);
	newNavItem3.label = 'CONTACT';
	newNavItem3.href = '/contact';

	const navItems = [newNavItem1, newNavItem2, newNavItem3];

	// get versions from package.json to display in the footer
	//@ts-expect-error
	const appVersion = packageJson?.version;
</script>

<MetaTags {...metaTags} />
<JDGAppContainer
	appLoadingIconSrc={addCloudinaryUrlTransformation(sharedUrls.websiteIconSrc)}
	{accentColors}
	linkColorDefault={accentColors[1]}
	linkColorContrastAdjustment={8}
	showHeaderStripes={false}
	fontFamily="Goldman"
>
	<JDGHeader
		logoJustification="center"
		logoSrc={addCloudinaryUrlTransformation(sharedUrls.websiteIconSrc)}
		{navItems}
	/>

	<JDGBackground />

	<slot />

	<div class="footer-accent-bar {accentColorBar}">
		Harnessing algorithms to iterate prototypes into products
	</div>
	<JDGFooter
		repoName={pmx3dWebsiteRepoName}
		{appVersion}
		alignItems="center"
		showDevToolsButton={true}
		copyright="PARAMETRIX3D, LLC"
	></JDGFooter>
</JDGAppContainer>

<style>
	.footer-accent-bar {
		padding: 10px;
		text-align: center;
	}
</style>
