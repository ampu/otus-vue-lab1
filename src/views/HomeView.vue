<template>
  <div class="home">
    <HomeHeader/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import HomeHeader from '@/components/HomeHeader.vue'

export default defineComponent({
  name: `HomeView`,
  components: {
    HomeHeader,
  },
})
</script>
