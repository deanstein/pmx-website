<script>
	import { onMount } from 'svelte';
	import { JDGBodyCopy, JDGContentBoxFloating, JDGContentContainer } from 'jdg-ui-svelte';

	// page copy will change depending on whether a redirect was found
	let redirectFound = false;
	const titleNotFound = 'PAGE NOT FOUND';
	const textNotFound = "Sorry, the requested page wasn't found.";
	const titleRedirect = 'REDIRECTING...';
	const textRedirect = 'This page has moved! Taking you there now.';

	// these are the old Muse website paths
	// that we'll attempt to redirect to in this error page
	const redirects = {
		'/003': '/products/003',
		'/007': '/products/007',
		'/008': '/products/008',
		'/015': '/products/015',
		'/021': '/products/021',
		'/028': '/products/028',
		'/030': '/products/030',
		'/039': '/products/039',
		'/047': '/products/047',
		'/047d': '/products/047#d'
	};

	// check for whether the user is trying to access
	// one of the known redirects above, and redirect them
	onMount(() => {
		const currentDomain = window.location.hostname;
		const rawPath = window.location.pathname;

		// normalize path to handle .html suffix
		const path = rawPath.endsWith('.html') ? rawPath.slice(0, -5) : rawPath;

		// handle the pmx3d domain
		// all pmx3d.com pages will redirect to parametrix3d.com
		if (currentDomain === 'pmx3d.com') {
			const newUrl = `https://parametrix3d.com${path}`;
			redirectFound = true;
			setTimeout(() => {
				window.location.href = newUrl;
			}, 750);
			// the standard parametrix3d.com paths
		} else if (redirects.hasOwnProperty(path)) {
			// if the redirects list has an entry with this path, redirect
			redirectFound = true;
			// redirect after a short delay
			// so the redirect message can show
			setTimeout(() => {
				// @ts-expect-error
				window.location.href = redirects[path];
			}, 750);
		}
	});
</script>

<JDGContentContainer>
	<JDGContentBoxFloating
		title={redirectFound ? titleRedirect : titleNotFound}
		animateWhenVisible={false}
	>
		<JDGBodyCopy paddingTop="0">
			{#if redirectFound}
				{textRedirect}
			{:else}
				{textNotFound}
			{/if}
		</JDGBodyCopy>
	</JDGContentBoxFloating>
</JDGContentContainer>
