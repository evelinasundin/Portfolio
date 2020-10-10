<template>
  <div class="pb-48">
    <a :href="project.link">
      <img lazyload :src="project.image" class="pb-6"/>
    </a>
    <div class="pl-6 project-text relative">
      <h3 class="text-lg text-white font-serif pb-4"> {{project.title}} </h3>
      <p class="text-white font-sans max-w-3xl pb-6 leading-loose project-html" v-html="project.text"> </p>
      <a :href="project.link" target="_blank" class="font-sans text-md text-white underline pb-6 block" > Go to website </a>
      <div class="sm:flex opacity-50 justify-between">
        <div class="sm:flex items-center">
          <p class="font-sans text-white mr-2"> Techniques used: </p>
          <p v-for="item in project.techniques" :key="item" class="mr-3 font-sans inline-block leading-none text-white">
          {{item}}
          </p>
        </div>
        <div class="sm:flex">
          <p class="font-sans text-white pb-2 mr-3"> Client: {{project.client}} </p>
          <p class="font-sans text-white pb-2"> Employer: {{project.employer}} </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    project: [Object, Array]
  }
}
</script>

<style lang="scss">

.project-html {
  a {
    @apply underline;
  }
}

.project-text {
  &:before {
    content:'';
    height: 96%;
    width: 1px;
    background-color: white;
    position: absolute;
    left: 0;
    top: 8px;
  }
}

</style>
