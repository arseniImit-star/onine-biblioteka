<template>
  <div class="book-item" @click="emit('click')">
    <div class="book-cover">
      <div class="cover-icon">📚</div>
    </div>
    <div class="book-info">
      <h3>{{ book.title }}</h3>
      <p class="author">{{ book.author }}</p>
      <p class="year">{{ book.year }}</p>
      <span class="category">{{ getCategoryName(book.category) }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  book: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['click'])

const getCategoryName = (categoryId) => {
  const categories = {
    fiction: 'Художественная литература',
    science: 'Научная литература',
    history: 'История',
    philosophy: 'Философия'
  }
  return categories[categoryId] || categoryId
}
</script>

<style scoped>
.book-item {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
}

.book-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.book-cover {
  width: 100px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cover-icon {
  font-size: 3rem;
  color: white;
}

.book-info {
  flex: 1;
  padding: 15px;
}

.book-info h3 {
  color: #2c3e50;
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.book-info .author {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.book-info .year {
  color: #95a5a6;
  font-size: 0.85rem;
  margin-bottom: 8px;
}

.category {
  display: inline-block;
  background-color: #ecf0f1;
  padding: 3px 10px;
  border-radius: 15px;
  font-size: 0.75rem;
  color: #2c3e50;
}
</style>