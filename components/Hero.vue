<template>
  <div class="page-load delay-35 max-w-reg min-h-screen sm:flex items-center justify-between screen-height mx-auto py-20 relative">
    <div class="sm:pb-0 pb-16">
      <h1 class="font-serif text-2xl leading-tight text-white max-w-reg pb-10 head-title relative">
        Hi, Welcome
      </h1>
      <p class="text-white font-sans relative leading-loose max-w-md start-text text-start inline-block pl-6">
        I am Evelina a front end developer from Stockholm. Currently working at the full service agency <a href="https://ohmy.co" target="blank" rel="noopener noreferrer" class="underline">@ohmy.</a>
        Scroll down  to see some selected work I have done and to get to know me a little better.
      </p>
    </div>
    <div class="image-overlay page-load delay-4">
      <img class="sm:max-w-sm bface-visibility" lazyload src="~/assets/images/evelina.jpg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.screen-height {
  margin-top: -88px;
}

.text-img-text {
  &:hover {
    .text-img-img {
      opacity: 1;
    }
  }
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
