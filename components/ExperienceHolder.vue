<template>
  <section class="bg-gray-lightest py-20" id="experience">
    <div class="max-w-reg mx-auto">
      <h2 class="text-lg font-serif text-black pb-10"> Experience </h2>
      <div class="relative">
        <span class="timeline"> </span>
        <ExperienceItem v-for="experience in experiences" :key="experience.id" :experience="experience" />
      </div>
    </div>
  </section>
</template>

<script>
import {EXPERIENCES as experiences } from '~/static/constants.js'
export default {
  data() {
    return {
      experiences: experiences,
    }
  }
}
</script>


<style lang="scss" scoped>
.timeline {
  @apply absolute h-full bg-black;

  width: 1px;
}
</style>
