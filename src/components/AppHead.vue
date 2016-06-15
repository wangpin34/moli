<template>
	<div class="header">
		<h3>Moli({{ total }})</h3>
	</div>
</template>
<style lang="sass">

div.header{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 9%;
	background: #f8f8f8;
	border-bottom: 1px solid #CCF3E4;

	h3 {
		text-align: left;
		margin: 1rem auto;
		padding: 1rem;
	}
}

</style>
<script>

export default {
	name: 'app-head',
	props:['total'],
	methods: {

	}
}

</script>