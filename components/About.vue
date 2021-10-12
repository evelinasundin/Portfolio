<template>
 <section class="max-w-reg sm:flex justify-center items-center mx-auto sm:py-40 py-24" id="about">
  <div class="w-1/3 relative">
    <img class="w-full p-6" lazyload src="~/assets/images/evelina-vector.png" />
    <svg class="image-vector" viewBox="0 0 308 347" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M206.9 31.2828C164.044 -7.40799 130.983 46.5877 92.7181 2.50958C56.9023 -12.7953 -33.0957 92.5024 14.6586 127.398C45.4783 149.918 2.41383 237.083 31.4949 283.814C58.7393 318.709 111.391 276.161 166.799 325.443C227.921 379.808 292.613 320.239 307 218.309C302.714 177.292 243.051 170.693 233.226 145.151C217.92 105.359 260.47 79.6463 206.9 31.2828Z" stroke="#B4B4E5"/>
    </svg>
  </div>
  <div class="w-2/3 pl-12">
    <h2 class="text-lg font-serif text-black pb-6"> About </h2>
    <p class="text-black font-sans leading-loose"> I'm Evelina, a 27 year old frontend-developer / UX-UI designer living in Stockholm currently working <a href="https://ohmy.co"> @Oh My. </a> <br> I started my journey as a frontend-developer and have then studied and gained experience within UX / UI design and project management. <br> I'm a huge web nerd that loves the complexity and wonders of the internet. <br> In my spare time I love attending concerts, listening to music, painting and hanging out with friends and family. </p>
  </div>
  </section>
</template>


<style lang="scss" scoped>

.image-vector {
  @apply absolute m-6;
  top: -24px;
  left: -16px;
}

</style>
