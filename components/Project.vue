<template>
  <div class="pb-24 sm:flex">
    <a :href="project.link" class="w-1/2" target="_blank" rel="noopener noreferrer">
      <img class="shadow-lg" lazyload :src="project.image" />
    </a>
    <div class="pl-8 p-6 project-text flex flex-col relative w-1/2">
      <a :href="project.link" target="_blank" rel="noopener noreferrer">
        <h3 class="text-md font-bold text-black font-sans pb-4"> {{project.title}} </h3>
      </a>
      <p class="text-black font-sans max-w-3xl pb-6 leading-loose project-html" v-html="project.text"> </p>
      <div class="mt-auto">
        <p class="font-sans font-medium pb-3 text-black mr-2"> Techniques used: </p>
        <p v-for="item in project.techniques" :key="item" class="mr-3 text-xs bg-purple-light py-2 px-3 rounded-full font-sans inline-block leading-none text-black">
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
