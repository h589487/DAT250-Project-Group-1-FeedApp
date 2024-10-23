<template>
  <div>
    <h2>Create a New Poll</h2>
    <form @submit.prevent="createPoll">
      <input v-model="question" placeholder="Poll Question" required />
      <input v-model="option1" placeholder="Option 1" required />
      <input v-model="option2" placeholder="Option 2" required />
      <button type="submit">Create Poll</button>
    </form>
  </div>
</template>

<script>
import apiClient from "@/services/api.js";

export default {
  data() {
    return {
      question: "",
      option1: "",
      option2: "",
    };
  },
  methods: {
    async createPoll() {
      try {
        const poll = {
          question: this.question,
          options: [this.option1, this.option2],
        };
        await apiClient.post("/polls", poll);
        alert("Poll created successfully!");
        this.question = "";
        this.option1 = "";
        this.option2 = "";
      } catch (error) {
        console.error("Error creating poll:", error);
      }
    },
  },
};
</script>
