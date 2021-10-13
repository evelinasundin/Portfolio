<template>
  <div class="sm:mb-24 mb-16 rounded-lg md:flex items-center">
    <a :href="project.link" class="md:w-1/2 w-full" target="_blank" rel="noopener noreferrer">
      <img class="shadow-lg rounded-lg" lazyload :src="project.image" />
    </a>
    <div class="sm:pl-8 sm:p-6 pt-8 project-text flex flex-col relative md:w-1/2">
      <a :href="project.link" target="_blank" rel="noopener noreferrer">
        <h3 class="text-md font-bold text-black font-sans pb-4"> {{project.title}} </h3>
      </a>
      <p class="text-gray-darkest font-sans max-w-3xl pb-6 leading-loose project-html" v-html="project.text"> </p>
      <div>
        <p v-for="item in project.techniques" :key="item" class="mr-3 mb-2 text-xs bg-purple-light py-2 px-3 rounded-full font-sans inline-block leading-none text-black">
          {{item}}
        </p>
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

.bg-gradient {
background: rgb(197,197,252);
background: linear-gradient(94deg, rgba(197,197,252,1) 0%, rgba(236,236,255,1) 100%);
}

</style>
