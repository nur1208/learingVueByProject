<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="tab-tracker-form" autocomplete="off">
            <v-text-field
              class="black-bb"
              filled
              label="Email"
              v-model="email"
            ></v-text-field>
            <br />
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              filled
              class="black-bb"
              autocomplete="new-password"
            ></v-text-field>
          </form>
          <div class="danger-alert error-here" v-html="error" />
          <v-btn dark class="cyan" @click="login">
            Login
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });

        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.$router.push({ name: "root" });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
.error-here {
  color: red;
}
/* .black-bb {
  border-bottom: 1px solid black;
} */
</style>
