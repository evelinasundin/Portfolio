<template>
  <div class="bg-black">
  <Nav />
  <div class="sm:px-0 px-4">
  <Hero />
  <ProjectsHolder />
  <About />
  </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
       });
    });
  }
}
</script>

<style lang="scss">

</style>
