<template>
  <div>
    <h2>Récapitulatif des Informations</h2>
    <div
      v-if="
        formData.nom &&
        formData.prenom &&
        formData.email &&
        formData.telephone &&
        formData.codePostal
      "
    >
      <p><strong>Nom :</strong> {{ formData.nom }}</p>
      <p><strong>Prénom :</strong> {{ formData.prenom }}</p>
      <p><strong>Email :</strong> {{ formData.email }}</p>
      <p><strong>Téléphone :</strong> {{ formData.telephone }}</p>
      <p><strong>Code Postal :</strong> {{ formData.codePostal }}</p>
    </div>

    <h2>Détails de la Card Sélectionnée</h2>
    <div v-if="selectedCard">
      <p><strong>Titre :</strong> {{ selectedCard.title }}</p>
      <p><strong>Description :</strong> {{ selectedCard.description }}</p>
    </div>

    <button @click="editForm">Modifier</button>
  </div>
</template>

<script setup>
import { ref, watchEffect, defineProps, defineEmits } from "vue";

const props = defineProps({
  dataToEdit: Object,
  selectedCard: Object,
});

const emit = defineEmits(["editForm"]);

const formData = ref({
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  codePostal: "",
});

watchEffect(() => {
  if (props.dataToEdit) {
    formData.value = { ...props.dataToEdit }; // Mettre à jour le formulaire avec les données à éditer
  } else {
    resetForm(); // Réinitialiser le formulaire si dataToEdit est vide
  }
});

function editForm() {
  emit("editForm"); // Émettre un événement pour indiquer que l'utilisateur veut éditer le formulaire
}

function resetForm() {
  formData.value = {
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    codePostal: "",
  };
}
</script>

<style scoped>
/* Styles spécifiques au composant Recap.vue */
</style>
