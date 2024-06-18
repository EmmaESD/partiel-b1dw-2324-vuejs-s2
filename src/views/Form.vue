<script setup>
import { ref } from "vue";
const emit = defineEmits(["addItemIntoInfos"]);

const form = ref({
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  code: "",
});

const props = defineProps({
  nom: String,
  prenom: String,
  email: String,
  telephone: String,
  code: Number,
});

function sendForm(e) {
  e.preventDefault();
  emit("addItemIntoInfos", { ...form.value });
  form.value = {
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    code: "",
  };
}
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
    <RouterLink to="/step2"><input type="submit" value="Valider" /></RouterLink>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
