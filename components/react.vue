<template>
  <div id="reactRoot" ref="reactRoot">React Root</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { render } from './react/root'

export default Vue.extend({
  mounted() {
    render(this.$refs.reactRoot as HTMLElement)
  }
})
</script>
