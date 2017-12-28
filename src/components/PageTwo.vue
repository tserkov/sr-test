<template>
  <main>
    <section v-scroll-reveal="{ delay: 250 }">
      <img src="../assets/logo.png" style="filter:invert(1)"><br>

      <router-link :to="{ name: 'PageOne' }">Page One</router-link>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'PageTwo',
  };
</script>
