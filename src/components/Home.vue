<template>
  <div class="home">
    <div class="row">
      <FileUpload />
      <a v-if="isUrl" class="button success" target="_blank" :href="'https://www.overleaf.com/docs?snip_uri=' + $store.state.url + '&splash=none'">Go to Overleaf</a>
    </div>
    <div class="row">
      <a v-if="isUrl" class="button" target="_blank" :href="$store.state.url">Download your .tex resume</a>
    </div>
  </div>
</template>

<script>
import FileUpload from '@/components/FileUpload'

import { mapGetters } from 'vuex'

export default {
  name: 'home',
  computed: mapGetters([
    'isUrl'
  ]),
  components: {
    FileUpload
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}

.row {
  margin: 2.5px;
  flex-direction: row;
}

.row * {
  margin: 0 5px;
}

.home {
  border: 1px blue solid;
  border-radius: 5px;
  background-color: #B9DBFF;
  margin: 10px;
  padding: 50px;
  max-width: 500px;
}
</style>
