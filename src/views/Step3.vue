<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const itemList = ref([]);
const sportId = ref(route.params.id);
const sport = ref(null);
const session = ref(null);

const fetchSportDetails = async () => {
  try {
    const response = await fetch("./data_activities.json");
    if (!response.ok) {
      throw new Error("Impossible de charger les détails du sport");
    }
    const data = await response.json();
    itemList.value = data;

    const sportFound = itemList.value.find((sport) =>
      sport.sessions.some((session) => session.date === sportId.value)
    );
    if (sportFound) {
      const sessionFound = sportFound.sessions.find(
        (session) => session.date === sportId.value
      );
      sport.value = sportFound;
      session.value = sessionFound;
    } else {
      throw new Error("Sport non trouvé");
    }
  } catch (error) {
    console.error(
      "Erreur lors du chargement des détails du sport :",
      error.message
    );
  }
};

onMounted(async () => {
  console.log("Monté : étape 3");
  await fetchSportDetails();
});
</script>

<template>
  <div v-if="sport && session">
    <h1>Votre choix :</h1>
    <div>
      <h2>{{ sport.name }}</h2>
      <p>Date : {{ session.date }}</p>
      <p>Heure : {{ session.start_at }} - {{ session.end_at }}</p>
      <p>Catégorie : {{ session.categories }}</p>
      <p>Inscrits : {{ session.registered }}</p>
      <p>Places disponibles : {{ session.available_places }}</p>
      <RouterLink><button>Valider</button></RouterLink>
    </div>
  </div>
  <div v-else>
    <p>Chargement...</p>
  </div>
</template>

<style scoped></style>
