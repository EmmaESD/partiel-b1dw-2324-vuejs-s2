<template>
  <form @submit.prevent="sendForm">
    <input type="text" v-model="form.nom" placeholder="Nom" />
    <input type="text" v-model="form.prenom" placeholder="Prénom" />
    <input type="email" v-model="form.email" placeholder="Email" />
    <input type="tel" v-model="form.telephone" placeholder="Téléphone" />
    <input
      type="text"
      v-model.number="form.code"
      placeholder="Code postal de résidence"
    />

    <button type="submit">Valider</button>
  </form>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { RouterLink } from "vue-router";

const form = ref({
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  code: "",
});

const emit = defineEmits(["addItemIntoInfos"]);

function sendForm() {
  emit("addItemIntoInfos", { ...form.value });
  resetForm();
}

function resetForm() {
  form.value = {
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    code: "",
  };
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
