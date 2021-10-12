<template>
  <section class="bg-gray-lightest py-40" id="experience">
    <div class="max-w-reg mx-auto">
      <h2 class="text-lg font-serif text-black pb-10"> Experience </h2>
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-md font-sans font-bold text-black pb-4"> Work </h2>
          <span class="block border-t border-black mb-12 mr-12"> </span>
          <ExperienceItem v-for="job in jobs" :key="job.title" :experience="job" />
        </div>
        <div class="w-1/2">
          <h2 class="text-md font-sans font-bold text-black pb-4"> Education </h2>
          <span class="block border-t border-black mb-12 mr-12"> </span>
          <ExperienceItem v-for="education in educations" :key="education.title" :experience="education" />
          <h2 class="text-md font-sans font-bold text-black pb-4 mt-24"> Courses </h2>
          <ExperienceItem v-for="course in courses" :key="course.title" :experience="course" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {JOBS as jobs, COURSES as courses, EDUCATIONS as educations } from '~/static/constants.js';

export default {
  data() {
    return {
      jobs: jobs,
      courses: courses,
      educations: educations
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
