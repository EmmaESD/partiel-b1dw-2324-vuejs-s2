<script setup>
import { ref, watchEffect, defineProps, defineEmits } from "vue";

const props = defineProps({
  dataToEdit: Object, // Définissez le type de votre prop dataToEdit
});

const emit = defineEmits(["addItemIntoInfos"]);

const formData = ref({
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  codePostal: "",
});

const editing = ref(false);

// Utilisation de watchEffect pour surveiller les changements dans props.dataToEdit
watchEffect(() => {
  if (props.dataToEdit) {
    formData.value = { ...props.dataToEdit };
    editing.value = true;
  } else {
    resetForm(); // Réinitialiser le formulaire si dataToEdit devient null ou undefined
  }
});

function handleSubmit() {
  emit("addItemIntoInfos", { ...formData.value });
  resetForm();
}

function resetForm() {
  formData.value = {
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    codePostal: "",
  };
  editing.value = false;
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="formData.nom" placeholder="Nom" />
    <input type="text" v-model="formData.prenom" placeholder="Prénom" />
    <input type="email" v-model="formData.email" placeholder="Email" />
    <input type="tel" v-model="formData.telephone" placeholder="Téléphone" />
    <input
      type="text"
      v-model.number="formData.codePostal"
      placeholder="Code postal de résidence"
    />

    <RouterLink to="/step2"
      ><button type="submit">
        {{ editing ? "Modifier" : "Valider" }}
      </button></RouterLink
    >
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
