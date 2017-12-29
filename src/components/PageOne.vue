<template>
  <main>
    <section v-scroll-reveal.reset="{ delay }">
      <img src="../assets/logo.png"><br>

      <router-link :to="{ name: 'PageTwo' }">Page Two</router-link><br>

      <small>or scroll down</small>
    </section>
    <section style="padding:100vh 0 0 0">
      <small>now scroll back up for a 1s delay!</small>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'PageOne',
    data() {
      return {
        delay: 250,
      };
    },
    mounted() {
      setTimeout(() => {
        this.delay = 1000;
      }, 2500);
    },
  };
</script>
