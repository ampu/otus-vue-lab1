<template>
  <h1>This is a home page</h1>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: `HomeHeader`,
  props: {
    msg: String,
  },
})
</script>

<style scoped>
</style>
