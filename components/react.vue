<template>
  <div id="reactRoot" ref="reactRoot">React Root</div>
</template>

<script>
import { render } from './react/root'

export default {
  mounted() {
    render(this.$refs.reactRoot)
  }
}
</script>
