<template>
  <nav class="px-10 py-6 bg-gray-lightest navbar fixed top-0 left-0 w-full z-50" :class="{ 'hidden-navbar': !showNavbar }">
    <div class="flex justify-between">
      <a href="#" class="text-black font-md font-bold font-sans"> Evelina Sundin </a>
      <div class="nav-links">
        <a href="#about" class="text-gray-darkest font-semibold font-sans sm:pr-6 pr-3"> About </a>
        <a href="#knowledge" class="text-gray-darkest font-semibold font-sans sm:pr-6 pr-3"> Knowledge </a>
        <a href="#selectedwork" class="text-gray-darkest font-semibold font-sans sm:pr-6 pr-3"> Experience </a>
        <a href="#selectedwork" class="text-gray-darkest font-semibold font-sans sm:pr-6 pr-3"> Personal Projects </a>
        <a href="#selectedwork" class="text-gray-darkest font-semibold font-sans"> Contact </a>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      offset: 60,
    }
  },
  mounted () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < this.offset) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    }
  }
}
</script>

<style lang="scss">

.delay-2 {
  animation-delay: 2s;
}

.delay-25 {
  animation-delay: 2.5s;
}

.delay-35 {
  animation-delay: 3.5s;
}

.delay-4 {
  animation-delay: 5s;
}

.nav-links {
  a {
    transition: opacity .2s ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }
}

.navbar {
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-in-out;
}

.navbar.hidden-navbar {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.nav-links {
  @apply fixed top-0 p-10 flex flex-col bg-gray-lightest h-screen z-50;
  right: -1000px;
  @screen md {
    @apply relative p-0 flex-row h-auto right-0;
  }
}

</style>
