<script setup>
import Form from "./components/Form.vue";
import { RouterView } from "vue-router";

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
  console.log("ad new item");
  infosList.value.push(item);
};
</script>

<template>
  <RouterView
    :nom="nom"
    :prenom="prenom"
    :email="email"
    :telephone="telephone"
    :code="code"
  />
</template>

<style scoped></style>
