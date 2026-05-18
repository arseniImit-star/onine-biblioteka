<template>
  <div class="book-detail-component">
    <div class="book-header">
      <h1>{{ book.title }}</h1>
      <div class="book-meta">
        <span class="author">{{ book.author }}</span>
        <span class="year">{{ book.year }}</span>
        <span class="category">{{ getCategoryName(book.category) }}</span>
      </div>
    </div>
    
    <div class="book-content">
      <h3>Описание</h3>
      <p>{{ book.description || 'Описание отсутствует' }}</p>
    </div>
    
    <div class="book-actions">
      <button @click="emit('edit-book')" class="edit-button">Редактировать</button>
      <button @click="emit('delete-book')" class="delete-button">Удалить книгу</button>
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

const emit = defineEmits(['delete-book', 'edit-book'])

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
.book-detail-component {
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  overflow: hidden;
}

.book-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px;
}

.book-header h1 {
  font-size: 2rem;
  margin-bottom: 15px;
}

.book-meta {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.book-meta span {
  background-color: rgba(255,255,255,0.2);
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.book-content {
  padding: 30px;
}

.book-content h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.book-content p {
  color: #666;
  line-height: 1.6;
}

.book-actions {
  padding: 20px 30px 30px;
  display: flex;
  gap: 15px;
}

.edit-button, .delete-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
}

.edit-button {
  background-color: #3498db;
  color: white;
}

.edit-button:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.delete-button {
  background-color: #e74c3c;
  color: white;
}

.delete-button:hover {
  background-color: #c0392b;
  transform: translateY(-2px);
}
</style>