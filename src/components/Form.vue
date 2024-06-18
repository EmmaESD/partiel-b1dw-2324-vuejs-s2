<script setup>
import { defineProps } from "vue";

const props = defineProps({
  nom: String,
  prenom: String,
  email: String,
  telephone: String,
  code: Number,
});
</script>

<template>
  <form @submit="sendForm">
    <input type="text" v-model="form.nom" placeholder="nom" />
    <input type="text" v-model="form.prenom" placeholder="prenom" />
    <input type="text" v-model="form.email" placeholder="Email" />
    <input type="text" v-model="form.telephone" placeholder="telephone" />
    <input
      type="text"
      v-model="form.code"
      placeholder="Code postal de résidence"
    />
    <input type="submit" value="Valider" />
  </form>
</template>
