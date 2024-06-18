<script setup>
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
  <h1>Mes couilles dans du papier</h1>
  <!-- <form @submit="sendForm">
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
  </form> -->
</template>
