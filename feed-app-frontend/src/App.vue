<template>
  <div id="app">
    <header>
      <h1>Poll Application</h1>
    </header>

    <main>
      <CreatePoll />
    </main>
  </div>
</template>

<script>
import CreatePoll from "./components/CreatePoll.vue";

export default {
  name: "App",
  components: {
    CreatePoll,
  },
};
</script>

<style>
/* Basic styles for the app */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
}

header {
  background-color: #42b983;
  padding: 20px;
  color: white;
}

main {
  padding: 20px;
}
</style>
