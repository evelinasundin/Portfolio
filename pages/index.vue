<template>
  <div>
    <div class="bg-gray-lightest">
    <Nav />
    <Hero />
    </div>
    <About />
    <ExperienceHolder />
    <ProjectsHolder />
    <CtaWork />
    <Footer />
  </div>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

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
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    });
  }
}
</script>

<style lang="scss">

</style>
