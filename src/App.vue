<script setup>
import { RouterView } from "vue-router";
import { ref } from "vue";

const infosList = ref([
  {
    id: 1,
    nom: "Doe",
    prenom: "John",
    email: "johndoe@gmail.com",
    telephone: "0601023532",
    code: "33000",
  },
]);

const addItemIntoInfos = (item) => {
  console.log("ajouter un nouvel élément");
  infosList.value.push(item);
};
</script>

<template>
  <h1>JO 2024</h1>
  <RouterView />
</template>

<style scoped></style>
