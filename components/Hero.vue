<template>
  <div class="relative">
    <div class="bg-gray-lightest delay-35 max-w-reg px-4 mx-auto py-20">
      <div class="sm:pb-0 pb-16">
        <h1 class="font-serif animate-text-wrapper text-4xl leading-tight text-black max-w-reg head-title relative">
          <span class="animate-text-holder block">
            <span class="animate-text slide-up block">
              Hi, I'm
            </span>
          </span>
          <span class="animate-text-holder block">
            <span class="animate-text slide-up block">
              Evelina Sundin
            </span>
          </span>
         <span class="animate-text-holder block">
            <span class="animate-text slide-up block">
              I build stuff for the web.
            </span>
          </span>
        </h1>
      </div>
      <div class="hero-circle">
        <svg height="200" width="200">
          <circle class="circle" cx="100" cy="100" r="95" stroke="#B4B4E5" stroke-width="1" fill-opacity="0" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

// .circle {
//   @apply h-40 w-40 rounded-full border-purple border absolute;
//   left: -44px;
// }

.hero-circle {
  @apply h-40 w-40 absolute;
  left: -34px;
  bottom: -50%;
  transform: translateY(-50%) rotate(180deg);
}

.circle {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: stroke 2s ease-in forwards;
  animation-delay: 2.5s;
}

@keyframes stroke {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fadeIn {
	to {
		opacity: 1;
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

.animate-text-wrapper {
    display: flex;
    flex-direction: column;

    .animate-text-holder {
    overflow: hidden;

    }
     .animate-text {
      width: max-content;
      white-space: nowrap;
      margin: 0;
      line-height: 117%;
     }
}

@for $i from 1 through 3 {
  .animate-text-wrapper {
    .animate-text-holder {
      &:nth-child(#{$i}) {
        .animate-text {
        animation-delay: 2 + $i * 0.09s; //2s default loading
        }
      }

    }
  }
}

.slide-up {
  animation: slideup 1s cubic-bezier(0.65, 0, 0.35, 1) both;
}

@keyframes slideup {
  0%{
      transform: translateY(100px);
  }
  100% {
    transform: translateY(0);
  }
}

</style>
