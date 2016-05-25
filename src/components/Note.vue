<template>
  <div class="note">
   	<h5>{{data.title}}</h5>
   	<p>{{data.content}}</p>
  </div>
</template>

<style>
.note {
	padding-bottom: 2rem;
}

.note h5 {
	font-weight: normal;
}

.note p {
	color: grey;
}
</style>

<script>

export default {
  name: 'note',
  props:['data'],
  methods: {
  	edit: () => {

  	}
  }
}
</script>