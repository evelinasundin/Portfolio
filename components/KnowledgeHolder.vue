<template>
  <section class="max-w-reg px-4 mx-auto sm:pt-24 pt-24" id="knowledge">
  <h2 class="text-lg font-serif text-black pb-10"> Knowledge </h2>
    <div class="sm:flex -mx-2">
    <KnowledgeItem v-for="items in knowledge" :key="items.id" :knowledge="items" />
    </div>
  </section>
</template>

<script>
import {KNOWLEDGE  as knowledge } from '~/static/constants.js'
export default {
  data() {
    return {
      knowledge: knowledge,
    }
  }
}
</script>
