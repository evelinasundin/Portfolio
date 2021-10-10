<template>
  <div class="sm:w-3/4 experience-item relative my-12 pl-10">
    <span class="block text-md font-serif text-gray-dark pb-2"> {{experience.year}} </span>
    <h2 class="text-black font-sans font-bold"> {{experience.title}} </h2>
    <div class="timeline-circle"> <span> </span> </div>
  </div>
</template>
<script>
export default {
  props: {
    experience: [Object, Array]
  }
}
</script>

<style lang="scss">

.experience-item {

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
    span {
      padding-bottom: 0;
    }
  }
}


.timeline-circle {
   @apply absolute bg-gray-lightest p-8 bottom-0;
    left: -1.95rem;
      top: 50%;
      transform: translateY(-50%);

    span {
      @apply border absolute w-4 h-4 border-black rounded-full bg-gray-lightest;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
}

</style>
