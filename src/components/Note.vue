<template>
  <div class="note">
   	<h5>{{data.title}}</h5>
   	<p>{{data.content.length>10 ? data.content.substr(0,10) + '   ...' : data.content }}</p>
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
  
  }
}
</script>