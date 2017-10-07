<template>
  <div>
    <div class="hello">
      <input type="file" @change="sendResume"/>
    </div>
    <div v-if="$store.state.url != undefined">
      <a target="_blank" :href="'https://www.overleaf.com/docs?snip_uri=' + $store.state.url + '&splash=none'">Go to Overleaf</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: mapActions(['sendResume'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
