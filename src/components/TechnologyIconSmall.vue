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
  <div class="flex flex-row items-center justify-center lg:py-3 py-2 px-5 sm:px-3 bg-[#12151a] rounded-md">
    <img :src="image" alt="" class="lg:h-5 h-4">
    <p class="text-gray-300 lg:text-md text-sm pl-3">{{ name }}</p>
  </div>
</template>
