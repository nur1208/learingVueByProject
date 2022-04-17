<template>
  <v-app>
    <page-header />

    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import PageHeader from "@/components/Header.vue";

export default {
  name: "App",
  components: { PageHeader }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
