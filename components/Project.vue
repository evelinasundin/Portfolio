<template>
  <div class="pb-48">
    <a :href="project.link">
      <img lazyload :src="project.image" class="pb-6"/>
    </a>
    <div class="pl-6 project-text relative">
      <h3 class="text-lg text-white font-serif pb-4"> {{project.title}} </h3>
      <p class="text-white font-sans max-w-3xl pb-6 leading-loose project-html" v-html="project.text"> </p>
      <p class="font-sans text-white pb-2"> <span class="font-serif underline mr-2">  Client:</span> {{project.client}} </p>
      <p class="font-sans text-white pb-2"> <span class="font-serif underline mr-2">  Employer:</span> {{project.employer}} </p>
      <div class="flex pb-8 items-center">
        <p class="font-serif text-white mr-2 underline"> Techniques used: </p>
        <div v-for="item in project.techniques" :key="item" class="mr-3 font-sans leading-none text-white">
        {{item}}
        </div>
      </div>
      <a :href="project.link" class="font-serif text-md text-white underline" > Go to website </a>
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
    height: 100%;
    width: 1px;
    background-color: white;
    position: absolute;
    left: 0;
    top: 8px;
  }
}

</style>
