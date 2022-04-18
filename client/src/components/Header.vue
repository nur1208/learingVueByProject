<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <span @click="navigateTo({ name: 'root' })" class="home">
        TabTracker
      </span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        v-if="!this.$store.state.isUserLoggedIn"
        flat
        dark
        @click="navigateTo({ name: 'register' })"
      >
        Sign Up
      </v-btn>

      <v-btn
        v-if="!this.$store.state.isUserLoggedIn"
        flat
        dark
        @click="navigateTo({ name: 'login' })"
      >
        Login
      </v-btn>

      <v-btn v-if="false" flat dark>
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: #e9e;
}
</style>
