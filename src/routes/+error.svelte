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
		'/003.html': '/products/003',
		'/007.html': '/products/007',
		'/008.html': '/products/008',
		'/015.html': '/products/015',
		'/021.html': '/products/021',
		'/028.html': '/products/028',
		'/030.html': '/products/030',
		'/039.html': '/products/039',
		'/047.html': '/products/047',
		'/047d.html': '/products/047#d'
	};

	// check for whether the user is trying to access
	// one of the known redirects above, and redirect them
	onMount(() => {
		// url minus the domain stuff, so for example /hst02.html
		const path = window.location.pathname;
		// if the redirects list has an entry with this path, redirect
		if (redirects.hasOwnProperty(path)) {
			redirectFound = true;
			// redirect after a short delay
			// so the redirect message can be read
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
