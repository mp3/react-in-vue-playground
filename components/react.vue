<template>
  <div class="container">
    <div ref="reactRoot">React Root</div>
    <div class="counter">
      Counter with Vue
      {{ count }} <button @click="add">add</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { render } from './react/root'

export default Vue.extend({
  mounted() {
    render(this.$refs.reactRoot as HTMLElement)
  },

  data() {
    return {
      count: 0
    }
  },

  methods: {
    add() {
      this.count = this.count + 1
    }
  }
})
</script>

<style>
.container {
  padding: 12px;
  border: 2px solid #42b883;
}

.counter {
  border: 2px solid #42b883;
}
</style>