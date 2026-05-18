<template>
  <div class="category-filter">
    <div class="filter-buttons">
      <button
        v-for="category in categories"
        :key="category.id"
        @click="selectCategory(category.id)"
        :class="{ active: selectedCategory === category.id }"
        class="filter-button"
      >
        {{ category.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Array,
    required: true
  },
  selectedCategory: {
    type: String,
    default: 'all'
  }
})

const emit = defineEmits(['update:selectedCategory', 'category-changed'])

const selectCategory = (categoryId) => {
  emit('update:selectedCategory', categoryId)
  emit('category-changed', categoryId)
}
</script>

<style scoped>
.category-filter {
  margin-bottom: 30px;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-button {
  padding: 8px 20px;
  background-color: white;
  border: 2px solid #ddd;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.3s;
  color: #2c3e50;
}

.filter-button:hover {
  border-color: #3498db;
  transform: translateY(-2px);
}

.filter-button.active {
  background-color: #3498db;
  color: white;
  border-color: #3498db;
}
</style>