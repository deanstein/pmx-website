<script>
	imageAttributesCollection;
	import {
		JDGBodyCopy,
		JDGContentBoxFloating,
		JDGContentContainer,
		JDGIFrame
	} from 'jdg-ui-svelte';
	import imageAttributesCollection from '../image-attributes-collection';
	import UpNext from '../../components/UpNext.svelte';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating title={'GET IN TOUCH'}>
		<JDGBodyCopy paddingTop="0" paddingBottom="0" textAlign="center">
			Feedback on our products? Custom design request?
			<br />
			Fill out the form below!
		</JDGBodyCopy>
		<JDGBodyCopy paddingTop="0" paddingBottom="0" textAlign="center">
			<h3 style="margin-bottom: 10px;">CONTACT FORM</h3>
		</JDGBodyCopy>
		<div class="iframe-wrapper">
			<JDGIFrame
				title={'Contact Parametrix3D'}
				src={'https://docs.google.com/forms/d/e/1FAIpQLSeQHueNHg-f5Ad6jN7jdW45jQXgQMxYv-mjZy11uLyJgak26Q/viewform?embedded=true'}
				maxHeightPx="900"
			/>
		</div>
	</JDGContentBoxFloating>
	<UpNext />
</JDGContentContainer>

<style>
	.iframe-wrapper {
		width: 100%;
		margin-top: -40px;
	}
</style>
