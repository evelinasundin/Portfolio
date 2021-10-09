<template>
  <div class="relative">
    <div class="bg-gray-lightest page-load delay-35 max-w-reg px-4 mx-auto py-20">
      <div class="sm:pb-0 pb-16">
        <h1 class="font-serif text-4xl leading-tight text-black max-w-reg pb-10 head-title relative">
          Hi, I'm <br>
          Evelina Sundin <br>
          I build things for the web.
        </h1>
      </div>
      <div class="hero-circle circle"> </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.circle {
  @apply h-40 w-40 rounded-full border-purple border absolute;
  left: -44px;
}

@keyframes slidedown {
  from {height: 0; opacity: 0;}
  to {height: 100%; opacity: 1;}
}

.start-text {
  &:before {
    content:'';
    width: 1px;
    background-color: white;
    position: absolute;
    left: 0;
    top: 8px;
    opacity: 0;
    animation: slidedown 1s forwards;
    animation-delay: 3.8s;
  }
}

.bface-visibility {
   backface-visibility: hidden;
}

.image-overlay {
  position: relative;
  &:before {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.2;
    z-index: 1;
  }
}

</style>
