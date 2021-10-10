<template>
  <section class="max-w-reg mx-auto sm:pt-20 py-0" id="personalprojects">
    <h2 class="text-lg font-serif text-black pb-10"> Personal Projects </h2>
    <Project v-for="project in work" :key="project.id" :project="project" />
  </section>
</template>

<script>
import { WORK as work } from '~/static/constants.js'
export default {
  data() {
    return {
      work: work
    }
  }
}
</script>
