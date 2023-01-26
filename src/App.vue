

<template>
  <nav class="navBar">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </nav>

  <button @click="redirect">redirect</button>
  <button @click="back">back</button>
  <button @click="forward">forward</button>

  <router-view />
</template>

<script >
export default {

  methods: {
    redirect() {
      this.$router.push({ name: 'Home' })
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    }

  }
}

</script>



<style>
.navBar {
  background: darkgray;
  padding: 1rem;
  border-radius: .5rem;
  display: flex;
  justify-content: space-evenly;
}

.navBar a:hover {
  transform: scale(1.3);
}

button {
  margin: 2rem;
}
</style>
