<template>
  <nav class="sm:mx-10 mx-4 pt-8 pb-20">
    <div class="flex justify-between pb-4 page-load delay-25">
      <a href="#" class="text-white font-serif"> Evelina Sundin </a>
      <div>
        <a href="#" class="text-white font-serif sm:pr-6 pr-3"> Selected Work </a>
        <a href="#" class="text-white font-serif"> About  </a>
      </div>
    </div>
    <span class="nav-line"> </span>
  </nav>
</template>

<style lang="scss">

@keyframes slidein {
  from {width: 0; opacity: 0;}
  to {width: 100%; opacity: 1;}
}

.nav-line {
  height: 1px;
  display: block;
  animation: slidein 1s ease forwards;
  animation-delay: 1s;
  background: white;
  opacity: 0;
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

</style>
