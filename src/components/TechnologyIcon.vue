<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: String,
    image: String,
  },
  mounted() {
    this.name
    this.image
  }
})
</script>

<template>
  <div v-motion-slide-visible-once-left
    class="flex flex-row items-center justify-center py-3 px-5 bg-[#12151a] bg-opacity-70 border-[1px] border-[#424242] border-opacity-40 rounded-md">
    <img :src="image" alt="" class="lg:h-8 h-5">
    <p class="text-gray-300 lg:text-xl text-md pl-3">{{ name }}</p>
    </div>
</template>
