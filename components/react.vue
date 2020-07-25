<template>
  <div>
    <div ref="reactRoot">React Root</div>
    <div>
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
