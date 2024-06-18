<script setup>
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
  console.log("Ajouter un nouvel élément :", item);
  infosList.value.push(item);
};
</script>

<template>
  <div>
    <h1>JO 2024</h1>
    <RouterView :infosList="infosList" :addItemIntoInfos="addItemIntoInfos" />
  </div>
</template>

<style scoped></style>
