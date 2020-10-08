<template>
    <div class="bg-black w-full min-h-screen flex items-center justify-center">
      <p class="text-white font-serif">
        Let's see if Vercel can handle Tailiwnd
      </p>
      <p class="test"> Let's see if Vercel can handle SCSS </p>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.test {
  &:before {
    content: '';
    position: absolute;
    height: 10px;
    width: 10px;
    background-color: red;
  }
}
</style>
