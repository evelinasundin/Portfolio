<template>
  <div class="experience-item relative pr-10" :class="experience.course ? 'flex items-center pb-2' : 'mb-12 experience-item-line'">
    <div class="flex items-center" @click="experience.desc ? toggle() : null">
      <h2 class="text-black font-sans" :class="experience.course ? 'text-base font-medium' : 'text-base font-bold'"> {{experience.title}} </h2>
      <svg v-if="experience.desc" class="ml-4 cursor-pointer" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8.5" cy="8.5" r="8" stroke="black"/>
        <line x1="8.5" y1="5" x2="8.5" y2="12" stroke="black"/>
        <line x1="5" y1="8.5" x2="12" y2="8.5" stroke="black"/>
      </svg>
    </div>
    <span class="block text-gray-dark font-sans text-sm" :class="experience.course ? 'pl-2' : 'pt-1'">
      {{experience.year}}
    </span>
    <div :class="showSection ? 'description toggled' : 'description'">
      <p class="mt-4 text-sm"> {{experience.desc}} </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    experience: [Object, Array]
  },
  data() {
    return {
      showSection: false,
    }
  },
  methods: {
    toggle() {
      this.showSection = !this.showSection
    }
  },
}
</script>

<style lang="scss">

.experience-item {

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
}

.experience-item-line {
  position: relative;
  padding-left: 1rem;
  &:before {
    content: '';
    height: 100%;
    position: absolute;
    background: black;
    width: 1px;
    left: 0;
    top:0;
  }
}

.description {
  max-height: 0;
  transition: all .3s ease-in-out;
  overflow: hidden;

  &.toggled {
    max-height: 500px;
  }
}


</style>
