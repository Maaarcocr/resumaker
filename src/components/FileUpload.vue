<template>
  <div>
    <input type="file" id="fileInput" @change="sendResume"/>
    <label class="button" for="fileInput">Upload your resume</label>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'file-upload',
  methods: mapActions(['sendResume'])
}
</script>

<style scoped>
input {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}
</style>