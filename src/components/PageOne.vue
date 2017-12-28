<template>
  <main>
    <section v-scroll-reveal="{ delay: 250 }">
      <img src="../assets/logo.png"><br>

      <router-link :to="{ name: 'PageTwo' }">Page Two</router-link>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'PageOne',
  };
</script>
