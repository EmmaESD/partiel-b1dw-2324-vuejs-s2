<script setup>
import { ref, onMounted } from "vue";

const itemList = ref([]);

const fetchAllItems = async () => {
  try {
    const response = await fetch("./data_activities.json");
    if (!response.ok) {
      throw new Error("Failed to fetch items");
    }
    const data = await response.json();
    itemList.value = data;
    console.log("fetchAllItems", data);
  } catch (error) {
    console.error("Error fetching items:", error.message);
  }
};

onMounted(async () => {
  console.log("on mounted app");
  await fetchAllItems();
});
</script>

<template>
  <div class="container">
    <div class="card" v-for="sport in itemList" :key="sport.name">
      <h1 class="name">{{ sport.name }}</h1>
      <div
        class="session"
        v-for="session in sport.sessions"
        :key="session.date"
      >
        <h3>{{ session.option }}</h3>
        <p>Date: {{ session.date }}</p>
        <p>Time: {{ session.start_at }} - {{ session.end_at }}</p>
        <p>Category: {{ session.categories }}</p>
        <div class="sessions">
          <p>Available Places: {{ session.available_places }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.card {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.name {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

.sessions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.session {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 4px;
}

.session h3 {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 5px;
}
p {
  color: black;
}
</style>
