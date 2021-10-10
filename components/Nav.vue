<template>
  <nav class="sm:mx-10 mx-4 pt-8 pb-20 bg-gray-lightest">
    <div class="flex justify-between pb-4 page-load delay-25">
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

<style lang="scss">

@keyframes slidein {
  from {width: 0; opacity: 0;}
  to {width: 100%; opacity: 1;}
}

@keyframes fadein {
  from {opacity: 0;}
  to {opacity: 1;}
}

.page-load {
  animation: fadein 1s forwards;
  opacity: 0;
}

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

</style>
