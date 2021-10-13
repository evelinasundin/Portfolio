<template>
  <div class="sm:w-1/3 w-full sm:pt0 pt-12">
    <div class="px-3">
      <span class="border-t border-black block pb-4"> </span>
      <p class="font-sans text-black font-bold mr-2 pb-2"> {{knowledge.title}} </p>
      <p v-for="item in knowledge.set" :key="item" class="mr-3 font-sans inline-block leading-none text-black">
      {{item}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    knowledge: [Object, Array]
  }
}
</script>

<style lang="scss">

.project-html {
  a {
    @apply underline;
  }
}

</style>
