<script setup>
import { ref } from "vue";
import axios from "axios";
import router from "@/router";
import LoginForm from "./LoginForm.vue";
// const username = ref("");
// const email = ref("");
const output = ref("");

const goToRegister = () => {
  router.push("/register");
};

async function login(formData) {
  const { username, email } = formData; // Destructure formData

  if (username && email) {
    try {
      // Send POST request to the correct login endpoint
      const response = await axios.post("http://localhost:3000/auth/login", {
        username,
        email,
      });

      const token = response.data.token; // Extract token from response
      localStorage.setItem("authToken", token); // Store token in local storage
      console.log("Login successful. Token saved:", token);

      router.push("/dashboard"); // Redirect to dashboard
    } catch (error) {
      if (error.response) {
        console.error("Error during login:", error.response.data);
        output.value = "Invalid username or email.";
      } else {
        console.error("Error during login:", error.message);
      }
    }
  } else {
    output.value = "Username and email cannot be empty.";
  }
}

//TODO: anon authentication
const loginAnon = () => {
  localStorage.removeItem("authToken"); // Clear any stored token
  localStorage.removeItem("userRole"); // Optional: Clear role as well
  router.push("/dashboard"); // Navigate to the dashboard
};
</script>

<template>
  Don't have an account?
  <button class="btn" type="button" @click="goToRegister">
    Register account
  </button>

  <LoginForm formType="login" @submit="login"></LoginForm>

  <!-- <form name="Login" @submit.prevent="login">
    <div class="user">
      <label for="username"> Username:</label><br />
      <input id="username" type="text" v-model="username" />
    </div>
    <div class="user">
      <label for="email"> Email:</label><br />
      <input id="email" type="text" v-model="email" />
    </div>
    <button class="btn" type="submit">Login</button>
  </form> -->
  <br />
  <button class="btn" @click.prevent="loginAnon">
    Continue without an account
  </button>
</template>

<style scoped>
form {
  padding-left: 0%;
  padding-top: 10%;
  padding-bottom: 10%;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
}
.btn {
  text-wrap: wrap;
  width: max-content;
}

input {
  width: 100%;
}
</style>
